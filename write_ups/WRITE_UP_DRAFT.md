# Barbell Speed Tracking: A Computer Vision Investigation

## Abstract

Velocity-based training (VBT) is a strength training methodology that uses barbell speed as a real-time proxy for fatigue and effort. Commercial apps that implement VBT using computer vision exist, but are paywalled or limited in scope. This project is an investigation into building a free, open alternative — starting from raw video of the three powerlifting movements (squat, bench press, deadlift) and arriving at per-rep barbell velocity estimates using pose detection, signal smoothing, and automated phase detection. The deadlift pipeline is functional: YOLO Pose reliably tracks wrist position, a Savitzky-Golay filter removes sensor noise without flattening velocity peaks, and a PELT changepoint detection algorithm isolates the concentric phase of each rep. The squat works with constraints. The bench press exposed a fundamental limitation of the pose detection approach — the model fails when the lifter's head is not visible — which a high-angle camera setup is expected to resolve.

---

## 1. Introduction: Velocity-Based Training on a Budget

Velocity-based training is built on a simple observation: a fresh athlete moves the bar fast; a fatigued one moves it slow. By tracking barbell speed rep-to-rep, you can make smarter decisions — push harder when the bar is moving well, cut the set when speed drops past a threshold, or use velocity zones as a proxy for intensity instead of relying on percentages of a one-rep max.

Commercial apps exist that estimate barbell velocity from phone video using computer vision. They work reasonably well. But they sit behind subscriptions, impose usage limits, or restrict which movements are supported. For an athlete training three or four days a week across the squat, bench, and deadlift, that friction adds up.

I wanted something fast, free, and mine. So I built it.

This write-up documents the investigation: the model choices, the wrong turns, the signal processing decisions, and where things currently stand. It is not a polished product announcement — it is an honest account of how a working solution was arrived at incrementally.

---

## 2. Simplifying the Problem: Start With the Deadlift

The three powerlifting movements present different challenges for computer vision. In a squat, the lifter's wrists may pass behind their legs at the bottom. In a bench press, the lifter is horizontal and their head may be out of frame. But in a deadlift, the athlete is fully upright and visible throughout the lift. The barbell path is nearly vertical. The wrists stay in view.

Starting with the deadlift was a deliberate choice to simplify the problem. A clean baseline on the easiest movement is more useful than a fragile solution stretched across all three. Once the deadlift pipeline was working, generalizing would reveal exactly which assumptions broke down for the other lifts.

This turned out to be exactly right.

---

## 3. Finding the Right Detector

The first question was which computer vision model to use to track the barbell across video frames.

### YOLO — Noisy Out of the Box

YOLO (You Only Look Once) is a family of real-time object detection models. The obvious starting point was to use a standard YOLO detector to identify and track the barbell directly. Out of the box, the detections were noisy — the bounding box would jump frame to frame, occasionally misfire onto other objects, and required significant post-processing to produce a usable position signal. Tracking the barbell directly as an object proved unreliable.

### SAM2 — A Wrong Turn

SAM2 (Segment Anything Model 2), released by Meta, is a segmentation model that can track an object through video once it is identified in the first frame. The appeal was obvious: point it at the barbell once, and let it follow the barbell through the lift.

In practice, on real gym footage, SAM2 proved unreliable. Tracking would drift, lose the object, or latch onto the wrong region mid-lift. The gym environment — variable lighting, cluttered backgrounds, equipment visually similar to a barbell — was enough to break consistent tracking.

_[Figure: SAM2 tracking failure examples — frames where tracking drifted or lost the target]_

### YOLO Pose — The Right Model

Rather than tracking the barbell directly, the approach shifted to tracking the **lifter's wrists**. In a deadlift, the wrists are the closest rigid proxy for the barbell: the hands grip the bar and move with it almost exactly. If wrist position can be tracked reliably, barbell position follows.

YOLO Pose is a variant of YOLO trained to detect human keypoints — joints including the wrists, elbows, shoulders, hips, knees, and ankles — from a single frame. It is fast, runs locally, and produces a keypoint confidence score per joint per frame.

Testing YOLO Pose across different model sizes (nano, small, medium, large) showed that wrist tracking stability improved significantly at larger sizes, at the cost of inference speed. For offline analysis of recorded video, inference speed is not a constraint, so the larger model was the clear choice.

_[Figure: YOLO Pose wrist tracking overlay on deadlift footage — stable keypoint detection across frames]_

---

## 4. Taming the Signal

With wrist positions tracked per frame, the next step was extracting a usable velocity signal. This turned out to require two distinct steps: smoothing the raw position data, and isolating the concentric phase of each rep.

### The Noise Problem

Raw keypoint positions jump frame to frame even when the wrist is barely moving — a natural consequence of per-frame inference rather than continuous tracking. Velocity is computed as the finite difference of position: how far the wrist moved between consecutive frames, divided by the time between frames. Any noise in position gets amplified when you differentiate. A small jitter in position becomes a large spike in velocity.

The position signal needed to be smoothed before velocity could be meaningfully computed.

### Savitzky-Golay Filtering

The Savitzky-Golay filter works by fitting a polynomial to a sliding window of data points, then using the fitted value at the center of the window as the smoothed output. Think of it as a local curve-fitter rather than a blunt averager.

The key advantage over a simple moving average is that it **preserves peak shape**. A moving average flattens peaks by averaging them with their neighbors. Since velocity is derived from position, a peak-flattening smoother would systematically underestimate peak bar speed — exactly the metric VBT depends on. Savitzky-Golay avoids this, making it the right tool here.

_[Figure: raw vs. smoothed position signal, with concentric phases highlighted]_

### Isolating the Concentric Phase

A deadlift session video contains more than just the upward pulls — there are setup movements, pauses at lockout, the descent, and idle time between sets. For VBT, only the **concentric phase** matters: the upward portion of each rep where the bar is actively lifted.

Two algorithms were evaluated for automatically detecting these phases:

- **`scipy` peak-trough detection** — finds local maxima and minima in the position signal and infers lifting phases from the intervals between them. Straightforward, but sensitive to noise in the signal and requires careful parameter tuning tied to signal properties.
- **`ruptures` PELT** — a changepoint detection algorithm (see collapsible note below for how it works) that segments the signal into statistically distinct pieces.

PELT was applied not to the raw position signal but to the **velocity signal** (the first difference of smoothed position). This is a subtle but important choice. Applying changepoint detection to position tends to over-segment: a sustained upward movement looks like many small constant-mean pieces, so PELT finds many boundaries within a single rep. Differentiating first collapses a clean concentric phase into a near-zero-mean velocity segment (the bar is moving at a roughly steady speed), making it one coherent piece for PELT to find.

_[Collapsible: How PELT changepoint detection works]_

Even with PELT, the raw output required three post-processing steps to handle real-world signal quirks:

1. **Segment merging** — adjacent segments both exceeding a minimum velocity threshold are merged, handling cases where a single rep gets split across multiple changepoints.
2. **Boundary extension** — detected phase boundaries are extended forward and backward by up to 30 frames as long as the velocity direction supports it, to capture the full rep rather than a truncated slice.
3. **Velocity-ratio rejection** — candidates whose average velocity falls below 50% of the median candidate velocity are discarded, filtering out slow incidental movements like repositioning or settling at lockout.

_[Figure: velocity signal with PELT-detected concentric phases overlaid as shaded regions]_

---

## 5. Extracting Velocity

With concentric phases isolated, velocity can be computed per rep.

### px/sec as a Relative Metric

The pipeline produces velocity in pixels per second — how fast the wrist (and by proxy, the barbell) is moving in the frame. This is not directly comparable across different lifters, different camera distances, or different camera angles. But for a single lifter using a consistent setup, it is a perfectly valid relative metric. Rep A was faster than Rep B. Set 3 was slower than Set 1. That is the signal VBT cares about.

### The m/s Problem

Converting px/sec to meters per second requires knowing how many pixels correspond to a real-world meter in the frame — the camera's scale factor. This varies with camera distance, focal length, and lens distortion.

The clean solution is to film with a calibration reference: a checkerboard pattern of known dimensions placed in the frame. This is standard practice in camera calibration. It works, but it adds friction to every recording session.

Without calibration, a rougher proxy is the lifter's known range of motion (the vertical distance the bar travels in the lift). If the lifter knows their pull is 60 cm and the bar travels 480 pixels in the frame, the scale factor follows. But this requires measuring or estimating range of motion per session, and it does not account for lens distortion.

For now, **rep time in seconds** serves as a sufficient proxy. If the lift setup is held constant, rep time correlates directly with velocity. The caveat is lift variation: a sumo deadlift has a shorter range of motion than a conventional deadlift, so rep times are not comparable across variations even at equal bar speeds.

_[Figure: sample per-rep velocity (px/sec) output across a working set]_

---

## 6. Generalizing to Squat and Bench

With the deadlift pipeline working, the natural next step was testing the same approach on the squat and bench press.

### Squat — Functional With Constraints

The squat pipeline worked, with one important constraint: the lifter's wrists must remain in frame throughout the lift. At the bottom of a squat, depending on stance width and camera angle, the wrists can pass behind the legs and become occluded. When that happens, the YOLO Pose model loses confidence on the wrist keypoints, and tracking falters for those frames.

The practical fix is a camera placement that keeps the wrists visible throughout — typically slightly elevated and to the side. This is a reasonable constraint for a controlled training setup.

### Bench Press — A Fundamental Limitation

The bench press exposed a deeper problem. When a lifter is lying down on the bench, the standard side-on camera angle means the lifter's head is usually not in frame. This matters more than it initially seems.

YOLO Pose is a top-down detector: it first finds a bounding box around a person, then runs keypoint estimation within that box. The person detector is trained predominantly on upright or near-upright humans. A lifter lying horizontal, seen from the side, with no visible head, is substantially out-of-distribution for the detector. The failure happens before keypoint extraction even runs — the person bounding box is not found reliably, so no keypoints are extracted.

_[Figure: bench press detection failure — missing or erratic bounding boxes on lying-down athlete]_

The proposed fix is a high camera angle: positioning the camera overhead (or at a steep diagonal) so that the lifter's head and wrists are both visible throughout the lift. This changes the body orientation relative to the camera from horizontal to more nearly vertical, which should bring it back into distribution for the person detector.

This is the current open question.

---

## 7. Summary

This project demonstrates a working computer vision pipeline for velocity-based training feedback on the deadlift, with a functional (constrained) squat implementation and an unresolved bench press problem.

**What was built:**
- A YOLO Pose-based wrist tracking pipeline running on local video
- Savitzky-Golay smoothing to preserve peak velocity fidelity
- PELT changepoint detection on the velocity signal, with segment merging, boundary extension, and velocity-ratio filtering, to isolate concentric phases automatically
- Per-rep px/sec velocity extraction

**What works:** Deadlift reliably. Squat with camera placement care. Bench press pending.

**What's next:** High-angle bench press footage to test whether bringing the head back into frame resolves the detection failure. After that, the remaining open problem is absolute velocity calibration — a checkerboard reference or range-of-motion estimation to convert px/sec into m/s for cross-lifter comparability.

The full source is available on GitHub. _[Link placeholder]_
