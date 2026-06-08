import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { IconBrandGithub } from "@tabler/icons-react";
import yoloPoseDeadlift from "@/assets/barbell-cv/yolo_pose_deadlift_inference.jpg";
import peltConcentric from "@/assets/barbell-cv/pelt_concentric.png";
import sgComparison from "@/assets/barbell-cv/sg_comparison.png";
import fiveRepDeadlift from "@/assets/barbell-cv/5 rep deadlift.gif";
import repVelocitySummary from "@/assets/barbell-cv/rep_velocity_summary.png";
import deadliftExample from "@/assets/barbell-cv/deadlift_example.gif";
import squatExample from "@/assets/barbell-cv/squat_example.gif";
import benchExample from "@/assets/barbell-cv/bench_example.gif";

// ── Helpers ───────────────────────────────────────────────────────────────────

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

// ── Shared primitives ─────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="mb-5 block text-[11px] font-medium uppercase tracking-[0.14em] text-accent"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </span>
  );
}


function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[13px] leading-[1.7] text-muted-foreground"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </p>
  );
}

function Prose({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[13px] leading-[1.7] text-muted-foreground ${className}`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </p>
  );
}

type BadgeVariant = "ok" | "warn" | "fail";
const badgeStyles: Record<BadgeVariant, string> = {
  ok: "border-green-200 text-green-700 bg-green-50 dark:border-green-800 dark:text-green-400 dark:bg-green-950/40",
  warn: "border-amber-200 text-amber-700 bg-amber-50 dark:border-amber-800 dark:text-amber-400 dark:bg-amber-950/40",
  fail: "border-red-200 text-red-700 bg-red-50 dark:border-red-800 dark:text-red-400 dark:bg-red-950/40",
};

function StatusBadge({
  variant,
  children,
}: {
  variant: BadgeVariant;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.015em] ${badgeStyles[variant]}`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </span>
  );
}

function Expander({
  summary,
  children,
}: {
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <details className="overflow-hidden rounded-lg border border-border">
      <summary
        className="flex cursor-pointer select-none list-none items-center gap-2 px-4 py-2.5 text-[12px] text-muted-foreground transition-colors hover:bg-accent/5 hover:text-accent [&::-webkit-details-marker]:hidden"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span className="inline-flex h-4 w-4 flex-shrink-0 items-center justify-center  text-[9px] leading-none transition-transform [[open]_&]:rotate-90">
          ▶
        </span>
        {summary}
      </summary>
      <div
        className="border-t border-border bg-card p-4 text-[12px] leading-[1.7] text-muted-foreground"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {children}
      </div>
    </details>
  );
}

function WtCard({
  variant,
  heading,
  children,
}: {
  variant: "fail" | "win";
  heading: string;
  children: React.ReactNode;
}) {
  const isWin = variant === "win";
  return (
    <div
      className={`rounded-md border p-3 text-[11px] leading-[1.6] ${
        isWin
          ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/40"
          : "border-border bg-background opacity-60"
      }`}
    >
      <div
        className={`mb-1.5 text-[11px] font-bold tracking-[0.04em] ${
          isWin
            ? "text-green-700 dark:text-green-400"
            : "text-red-700 dark:text-red-400"
        }`}
      >
        {heading}
      </div>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}


// ── Pipeline card ─────────────────────────────────────────────────────────────

const pipelineStages = [
  { num: "01", cat: "Detect", name: "YOLO Pose", to: "stage-1" },
  { num: "02", cat: "Smooth", name: "SG Filter", to: "stage-2" },
  { num: "03", cat: "Segment", name: "PELT", to: "stage-3" },
  { num: "04", cat: "Extract", name: "px / sec", to: "stage-4" },
  { num: "05", cat: "Results", name: "per movement", to: "stage-5" },
];

function PipelineCard() {
  return (
    <div className="mb-5 overflow-hidden rounded-xl border border-border bg-card px-7 pb-5 pt-6">
      <div
        className="mb-4 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.1em] text-muted-foreground/70 after:h-px after:flex-1 after:bg-border after:content-['']"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        The pipeline — click a stage to jump
      </div>
      <div className="flex items-start overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {pipelineStages.map((stage, i) => (
          <div key={stage.to} className="flex items-start">
            <button
              onClick={() => scrollToSection(stage.to)}
              className="group flex w-[106px] flex-shrink-0 flex-col items-center gap-2 border-none bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
            >
              {/* Circle — h-16 = 64px, center at 32px from top */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-background transition-all duration-200 group-hover:border-accent group-hover:bg-accent/5 group-hover:shadow-[0_0_0_4px_hsl(var(--accent)/0.07)]">
                <span
                  className="text-[17px] font-bold leading-none text-muted-foreground transition-colors duration-200 group-hover:text-accent"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {stage.num}
                </span>
              </div>
              <span
                className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground/70"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {stage.cat}
              </span>
              <span
                className="whitespace-nowrap text-[11px] font-medium text-muted-foreground"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {stage.name}
              </span>
            </button>
            {i < pipelineStages.length - 1 && (
              /* pt-8 = 32px = half circle height (h-16 / 2) — centers the line with the circle */
              <div className="flex min-w-4 flex-1 items-start pt-8">
                <div className="h-0 w-full border-t-2 border-dashed border-border" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Stage section wrapper ─────────────────────────────────────────────────────

function StageSection({
  id,
  n,
  chip,
  title,
  children,
}: {
  id: string;
  n: string;
  chip: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-t border-border py-[88px] [scroll-margin-top:80px] max-sm:py-[60px]"
    >
      <div className="mx-auto max-w-[860px] px-9 max-sm:px-5">
        <div className="mb-3.5 flex items-center gap-2.5">
          <span
            className="text-[11px] tracking-[0.04em] text-muted-foreground/60"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {n} / 05
          </span>
          <span
            className="rounded border border-accent/20 bg-accent/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-accent"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {chip}
          </span>
        </div>
        <h2
          className="mb-7 max-w-[22ch] text-[clamp(28px,3.8vw,42px)] font-bold leading-[1.05] tracking-[-0.025em]"
          style={{
            fontFamily: "var(--font-display)",
            color: "hsl(var(--primary))",
          }}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}


// ── Page ──────────────────────────────────────────────────────────────────────

export default function BarbellCVPage() {
  return (
    <>
      <Helmet>
        <title>Barbell Speed Tracking — Alexander Julian Ty</title>
        <meta
          name="description"
          content="A free, local alternative to commercial VBT apps — tracking barbell velocity from raw powerlifting video using pose detection, signal smoothing, and automated phase detection."
        />
        <link
          rel="canonical"
          href="https://alexanderjulianty.com/projects/BarbellCV"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://alexanderjulianty.com/projects/BarbellCV"
        />
        <meta
          property="og:title"
          content="Barbell Speed Tracking — Alexander Julian Ty"
        />
        <meta
          property="og:description"
          content="A free, local alternative to commercial VBT apps — tracking barbell velocity from raw powerlifting video using pose detection, signal smoothing, and automated phase detection."
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="pb-[88px] pt-20 max-sm:pb-[60px] max-sm:pt-[52px]"
      >
        <div className="mx-auto max-w-[860px] px-9 max-sm:px-5">
          <Eyebrow>Computer Vision · Python · 2026</Eyebrow>

          <h1
            className="mb-2 text-[clamp(48px,7vw,76px)] font-extrabold leading-[0.96] tracking-[-0.035em]"
            style={{
              fontFamily: "var(--font-display)",
              color: "hsl(var(--primary))",
            }}
          >
            Barbell Speed Tracking
          </h1>

          <p
            className="mb-6 text-[clamp(20px,2.8vw,28px)] font-semibold leading-[1.1] tracking-[-0.018em] text-muted-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A Computer Vision Investigation
          </p>

          <p
            className="mb-12 text-[13px] leading-[1.7] text-muted-foreground"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Velocity-based training uses barbell speed as a real-time proxy for
            fatigue and effort. Commercial apps exist, but are paywalled or
            limited in scope. This project is an investigation into building a
            free, open alternative — starting from raw video and arriving at
            per-rep velocity estimates using pose detection, signal smoothing,
            and automated phase detection. I wanted something fast, free, and
            mine. So I built it.
          </p>

          <PipelineCard />

          {/* Status row */}
          <div className="mb-9 flex flex-wrap items-center gap-2 rounded-lg border border-border bg-card px-4 py-3.5">
            <span
              className="mr-1 flex-shrink-0 text-[10px] uppercase tracking-[0.08em] text-muted-foreground/60"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Results
            </span>
            <StatusBadge variant="ok">✓ Deadlift — working</StatusBadge>
            <StatusBadge variant="warn">⚠ Squat — constrained</StatusBadge>
            <StatusBadge variant="fail">✗ Bench press — open</StatusBadge>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://github.com/julianty/barbell-speed-estimator"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-[12px] font-medium tracking-[0.025em] text-primary-foreground transition-colors duration-150 hover:bg-accent"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <IconBrandGithub size={14} />
              View on GitHub
            </a>
            <button
              onClick={() => scrollToSection("stage-1")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-transparent px-5 py-2.5 text-[12px] font-medium tracking-[0.025em] text-foreground transition-all duration-150 hover:border-foreground hover:bg-foreground/5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Read the investigation ↓
            </button>
          </div>
        </div>
      </section>

      {/* ── §2 · Simplifying the Problem ──────────────────────────────────────── */}
      <section className="border-t border-border py-[88px] max-sm:py-[60px]">
        <div className="mx-auto max-w-[860px] px-9 max-sm:px-5">
          <h2
            className="mb-7 text-[clamp(28px,3.8vw,42px)] font-bold leading-[1.05] tracking-[-0.025em]"
            style={{
              fontFamily: "var(--font-display)",
              color: "hsl(var(--primary))",
            }}
          >
            Simplifying the Problem: Start With the Deadlift
          </h2>
          <div className="grid grid-cols-[1fr_1.05fr] gap-8 max-sm:grid-cols-1">
            <div className="space-y-4">
              <Prose>
                The three powerlifting movements present different challenges
                for computer vision. In a squat, the lifter's wrists can be
                occluded by the barbell plates or rack posts. In a bench press,
                the lifter is horizontal and their head may be out of frame. But
                in a deadlift, the athlete is fully upright and visible
                throughout the lift. The barbell path is nearly vertical. The
                wrists stay in view.
              </Prose>
              <Prose>
                Starting with the deadlift was a deliberate choice to simplify
                the problem. A clean baseline on the easiest movement is more
                useful than a fragile solution stretched across all three. Once
                the deadlift pipeline was working, generalizing would reveal
                exactly which assumptions broke down for the other lifts. This
                turned out to be exactly right.
              </Prose>
            </div>
            <div>
              <img
                src={yoloPoseDeadlift}
                alt="YOLO Pose inference on a deadlift — wrist keypoints overlaid on the lifter"
                className="w-full rounded-lg border border-border object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stage 1 · Detection ───────────────────────────────────────────────── */}
      <StageSection
        id="stage-1"
        n="01"
        chip="Detection"
        title="Finding the Right Detector"
      >
        <div className="grid grid-cols-[1.05fr_1fr] gap-8 max-sm:grid-cols-1">
          <div>
            <img
              src={fiveRepDeadlift}
              alt="YOLO Pose wrist keypoint tracking overlay on a 5-rep deadlift set"
              className="w-full rounded-lg border border-border"
            />
          </div>
          <div>
            <Prose className="mb-4">
              Rather than tracking the barbell directly, the approach shifted to
              tracking the lifter's wrists.{" "}
              <a
                href="https://github.com/ultralytics/ultralytics"
                target="_blank"
                rel="noreferrer"
                className="text-accent underline underline-offset-2 transition-opacity hover:opacity-75"
              >
                YOLO Pose
              </a>{" "}
              is a variant of YOLO
              trained to detect human keypoints — joints including wrists,
              elbows, shoulders, hips, knees, and ankles — from a single frame.
              It produces a keypoint confidence score per joint per frame, so
              the pipeline degrades gracefully under occlusion: it flags rather
              than guesses.
            </Prose>
            <Caption>
              YOLO Pose tracks 17 body keypoints per frame. Wrists grip the bar
              and move with it near-exactly — a stable proxy without needing to
              detect the barbell itself. Testing across model sizes showed that
              stability improved significantly at larger sizes; since this runs
              on offline video, inference speed is no constraint.
            </Caption>
          </div>
        </div>
        <div className="mt-10 space-y-3 border-t border-border pt-6">
          <Expander summary="What I tried first">
            <div className="mb-3 grid grid-cols-2 gap-2.5 max-sm:grid-cols-1">
              <WtCard variant="fail" heading="YOLO (direct) ✗">
                The bounding box jumped frame-to-frame and misfired onto
                equipment. Heavy post-processing still left it unreliable.
                Tracking the barbell directly as an object proved unstable.
              </WtCard>
              <WtCard variant="fail" heading="SAM2 ✗">
                Point it at the barbell once, let it track through the set — an
                appealing idea. In practice, on real gym footage, tracking would
                drift, lose the object, or latch onto the wrong region mid-lift.
                Variable lighting and cluttered backgrounds were enough to break
                it.
              </WtCard>
            </div>
            <WtCard variant="win" heading="YOLO Pose → wrists ✓">
              Pose models are trained on millions of humans in every orientation
              — vastly more robust than object-tracking on a barbell-shaped
              object in a gym environment. Wrists grip the bar and move with it
              almost exactly.
            </WtCard>
          </Expander>
        </div>
      </StageSection>

      {/* ── Stage 2 · Smoothing ───────────────────────────────────────────────── */}
      <StageSection
        id="stage-2"
        n="02"
        chip="Smoothing"
        title="Taming the Signal"
      >
        <img
          src={sgComparison}
          alt="Raw vs. smoothed wrist position signal with concentric phases highlighted"
          className="mb-4 w-full rounded-lg border border-border"
        />
        <div className="space-y-4">
          <Caption>
            Raw keypoint positions jitter frame-to-frame — noise that gets
            amplified when differentiated into velocity. Velocity is the finite
            difference of position: how far the wrist moved between frames,
            divided by the time between them. Any noise in position becomes a
            spike in velocity.
          </Caption>
          <Prose>
            The{" "}
            <a
              href="https://en.wikipedia.org/wiki/Savitzky%E2%80%93Golay_filter"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline underline-offset-2 transition-opacity hover:opacity-75"
            >
              Savitzky-Golay filter
            </a>{" "}
            works by fitting a polynomial to a sliding
            window of data points, then using the fitted value at the center as
            the smoothed output. Think of it as a local curve-fitter rather than
            a blunt averager. The key advantage over a simple moving average is
            that it{" "}
            <strong className="text-foreground">preserves peak shape</strong>. A
            moving average flattens peaks by averaging them with their neighbors
            — systematically underestimating peak bar speed, exactly the metric
            VBT depends on. Savitzky-Golay avoids this.
          </Prose>
        </div>
      </StageSection>

      {/* ── Stage 3 · Phase Detection ─────────────────────────────────────────── */}
      <StageSection
        id="stage-3"
        n="03"
        chip="Phase Detection"
        title="Isolating the Concentric Phase"
      >
        <div className="grid grid-cols-[1fr_1.05fr] gap-8 max-sm:grid-cols-1">
          <div>
            <Prose className="mb-4">
              A deadlift session video contains more than just the upward pulls
              — there are setup movements, pauses at lockout, the descent, and
              idle time between sets. For VBT, only the{" "}
              <strong className="text-foreground">concentric phase</strong>{" "}
              matters: the upward portion of each rep where the bar is actively
              lifted.
            </Prose>
            <Prose className="mb-4">
              PELT was applied not to the raw position signal but to the{" "}
              <strong className="text-foreground">velocity signal</strong> — the
              first difference of smoothed position. Applied to position, a
              sustained upward movement looks like many small constant-mean
              pieces, so PELT over-segments. On velocity, a clean concentric
              phase is a single near-zero-mean segment, making it one coherent
              piece to find.
            </Prose>
            <Prose className="mt-5">
              Three post-processing steps follow the raw PELT output:{" "}
              <strong className="text-foreground">merge</strong> adjacent
              candidates above velocity threshold,{" "}
              <strong className="text-foreground">extend</strong> phase
              boundaries while velocity supports it, and{" "}
              <strong className="text-foreground">reject</strong> candidates
              below 50% of median candidate velocity.
            </Prose>
          </div>
          <div>
            <img
              src={peltConcentric}
              alt="Velocity signal with PELT-detected concentric phases as shaded regions"
              className="mb-4 w-full rounded-lg border border-border"
            />
            <Caption>
              Each shaded region is one rep's concentric phase — automatically
              detected, no manual labelling.
            </Caption>
          </div>
        </div>
        <div className="mt-10 space-y-3 border-t border-border pt-6">
          <Expander summary="Why not scipy peak-trough detection?">
            <p>
              The obvious approach was scipy's peak-trough detection — find
              local maxima and minima in the position signal, infer lifting
              phases from the intervals between them. It works in principle, but
              proved sensitive to noise in the signal and required careful
              parameter tuning tied to signal properties that shift between
              sessions. PELT on the velocity signal is more robust: it finds
              statistically distinct constant-mean pieces rather than relying on
              absolute extrema.
            </p>
          </Expander>
          <Expander summary="How PELT changepoint detection works">
            <p className="mb-3">
              <a
                href="https://centre-borelli.github.io/ruptures-docs/user-guide/detection/pelt/"
                target="_blank"
                rel="noreferrer"
                className="text-accent underline underline-offset-2 transition-opacity hover:opacity-75"
              >
                PELT
              </a>{" "}
              (Pruned Exact Linear Time) segments a signal into
              statistically distinct constant-mean pieces. A penalty term
              controls how many segments are allowed — lower penalty allows more
              segments; higher forces fewer, coarser divisions.
            </p>
            <p>
              Applied to <em>position</em>, a single upward pull looks like many
              small constant-mean pieces — PELT over-segments. Applied to{" "}
              <em>velocity</em>, a clean concentric phase is a single
              near-zero-mean segment (bar moving at roughly steady speed) —
              exactly one piece for PELT to find.
            </p>
          </Expander>
        </div>
      </StageSection>

      {/* ── Stage 4 · Output ──────────────────────────────────────────────────── */}
      <StageSection
        id="stage-4"
        n="04"
        chip="Output"
        title="Extracting Per-Rep Velocity"
      >
        <img
          src={repVelocitySummary}
          alt="Per-rep velocity (px/sec) across a working set — bar chart showing velocity trend across reps"
          className="mb-4 w-full rounded-lg border border-border"
        />
        <div className="space-y-4">
          <Caption>
            The pipeline produces velocity in pixels per second — how fast the
            wrist, and by proxy the barbell, is moving in the frame. This is not
            directly comparable across different lifters, camera distances, or
            angles. But for a single lifter using a consistent setup, it is a
            perfectly valid relative metric: Rep A was faster than Rep B, Set 3
            was slower than Set 1. That is the signal VBT cares about.
          </Caption>
          <Prose>
            For now,{" "}
            <strong className="text-foreground">rep time in seconds</strong>{" "}
            also serves as a sufficient proxy. If the lift setup is held
            constant, rep time correlates directly with velocity — with the
            caveat that variations with different ranges of motion (sumo vs.
            conventional deadlift) are not comparable at equal bar speeds.
          </Prose>
        </div>

        <div className="mt-10 space-y-3 border-t border-border pt-6">
          <Expander summary="The m/s calibration problem">
            <p className="mb-3">
              Converting px/sec to meters per second requires knowing how many
              pixels correspond to a real-world meter in the frame — the
              camera's scale factor. This varies with camera distance, focal
              length, and lens distortion.
            </p>
            <p className="mb-3">
              The clean solution is to film with a calibration reference: a
              checkerboard pattern of known dimensions placed in the frame.
              Standard practice in camera calibration — it works, but adds
              friction to every recording session.
            </p>
            <p>
              Without calibration, a rougher proxy is the lifter's known range
              of motion. If the lifter knows their pull is 60 cm and the bar
              travels 480 pixels, the scale factor follows. But this requires
              measuring or estimating range of motion per session, and doesn't
              account for lens distortion. This remains an open problem.
            </p>
          </Expander>
        </div>
      </StageSection>

      {/* ── Stage 5 · Results ─────────────────────────────────────────────────── */}
      <StageSection
        id="stage-5"
        n="05"
        chip="Results"
        title="What Works — and What Doesn't"
      >
        <div className="space-y-6">

          {/* Deadlift */}
          <div className="overflow-hidden rounded-xl border-[1.5px] border-green-200 bg-card dark:border-green-800">
            <div className="flex items-center justify-between border-b border-green-200 bg-green-50 px-4 py-3 dark:border-green-800 dark:bg-green-950/40">
              <span
                className="text-[15px] font-bold tracking-[-0.01em] text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Deadlift
              </span>
              <span
                className="text-[11px] font-bold text-green-700 dark:text-green-400"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ✓ working
              </span>
            </div>
            <div className="grid grid-cols-[1fr_1.05fr] gap-8 p-6 max-sm:grid-cols-1">
              <div className="space-y-4">
                <Prose>
                  The deadlift is the right baseline: the lifter is fully
                  upright and visible throughout the lift, the barbell path is
                  nearly vertical, and the wrists stay in view from setup to
                  lockout. There are no occlusion events and no ambiguity about
                  which phase is the concentric pull.
                </Prose>
                <Prose>
                  The pipeline is reliable on this movement. YOLO Pose tracks
                  the wrist keypoints stably across frames, Savitzky-Golay
                  smoothing preserves the velocity peak without flattening it,
                  and PELT cleanly segments each rep's concentric phase with
                  minimal post-processing intervention.
                </Prose>
              </div>
              <div>
                <img
                  src={deadliftExample}
                  alt="Deadlift pipeline output — annotated wrist keypoint overlay"
                  className="w-full rounded-lg border border-border"
                />
              </div>
            </div>
          </div>

          {/* Squat */}
          <div className="overflow-hidden rounded-xl border-[1.5px] border-amber-200 bg-card dark:border-amber-800">
            <div className="flex items-center justify-between border-b border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-800 dark:bg-amber-950/40">
              <span
                className="text-[15px] font-bold tracking-[-0.01em] text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Squat
              </span>
              <span
                className="text-[11px] font-bold text-amber-700 dark:text-amber-400"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ⚠ constrained
              </span>
            </div>
            <div className="grid grid-cols-[1fr_1.05fr] gap-8 p-6 max-sm:grid-cols-1">
              <div className="space-y-4">
                <Prose>
                  The squat pipeline worked, with one important constraint: the
                  lifter's wrists must remain in frame throughout the lift. At
                  the bottom of a squat, the wrists can be occluded by the
                  barbell plates or rack posts depending on camera angle. When
                  that happens, the YOLO Pose model loses confidence on the
                  wrist keypoints, and tracking falters for those frames.
                </Prose>
                <Prose>
                  The practical fix is a camera placement that keeps the wrists
                  visible throughout — typically slightly elevated and to the
                  side. This is a reasonable constraint for a controlled
                  training setup.
                </Prose>
              </div>
              <div>
                <img
                  src={squatExample}
                  alt="Squat tracking — wrist keypoint overlay"
                  className="w-full rounded-lg border border-border"
                />
              </div>
            </div>
          </div>

          {/* Bench press */}
          <div className="overflow-hidden rounded-xl border-[1.5px] border-red-200 bg-card dark:border-red-800">
            <div className="flex items-center justify-between border-b border-red-200 bg-red-50 px-4 py-3 dark:border-red-800 dark:bg-red-950/40">
              <span
                className="text-[15px] font-bold tracking-[-0.01em] text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Bench press
              </span>
              <span
                className="text-[11px] font-bold text-red-700 dark:text-red-400"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ✗ open
              </span>
            </div>
            <div className="grid grid-cols-[1fr_1.05fr] gap-8 p-6 max-sm:grid-cols-1">
              <div className="space-y-4">
                <Prose>
                  The bench press exposed a deeper problem. When a lifter is
                  lying down on the bench, the standard side-on camera angle
                  means the lifter's head is usually not in frame. This matters
                  more than it initially seems.
                </Prose>
                <Prose>
                  YOLO Pose is a top-down detector: it first finds a bounding
                  box around a person, then runs keypoint estimation within that
                  box. The person detector is trained predominantly on upright or
                  near-upright humans. A lifter lying horizontal, seen from the
                  side, with no visible head, is substantially
                  out-of-distribution for the detector. The failure happens{" "}
                  <strong className="text-foreground">
                    before keypoint extraction even runs
                  </strong>{" "}
                  — the person bounding box is not found reliably, so no
                  keypoints are extracted.
                </Prose>
                <Prose>
                  The proposed fix is a high camera angle: positioning the
                  camera overhead (or at a steep diagonal) so that the lifter's
                  head and wrists are both visible throughout the lift. This
                  changes the body orientation relative to the camera from
                  horizontal to more nearly vertical, which should bring it back
                  into distribution for the person detector. This is the current
                  open question.
                </Prose>
              </div>
              <div>
                <img
                  src={benchExample}
                  alt="Bench press — detection failure on lying-down athlete"
                  className="w-full rounded-lg border border-border"
                />
              </div>
            </div>
          </div>

        </div>
      </StageSection>

      {/* ── Footer ────────────────────────────────────────────────────────────── */}
      <footer className="border-t border-border pb-[88px] pt-16">
        <div className="mx-auto max-w-[860px] px-9 max-sm:px-5">
          <Eyebrow>Summary</Eyebrow>
          <h3
            className="mb-5 text-[28px] font-bold tracking-[-0.018em]"
            style={{
              fontFamily: "var(--font-display)",
              color: "hsl(var(--primary))",
            }}
          >
            What Was Built
          </h3>
          <ul className="mb-9 list-none">
            {[
              "YOLO Pose-based wrist tracking pipeline running on local video",
              "Savitzky-Golay smoothing to preserve peak velocity fidelity",
              "PELT changepoint detection on the velocity signal, with segment merging, boundary extension, and velocity-ratio filtering to isolate concentric phases automatically",
              "Per-rep px/sec velocity extraction",
            ].map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 border-b border-border py-2.5 text-[13px] leading-[1.6] text-muted-foreground before:flex-shrink-0 before:font-bold before:text-accent before:content-['→']"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {item}
              </li>
            ))}
          </ul>
          <Eyebrow>What's next</Eyebrow>
          <h3
            className="mb-5 text-[28px] font-bold tracking-[-0.018em]"
            style={{
              fontFamily: "var(--font-display)",
              color: "hsl(var(--primary))",
            }}
          >
            Open Problems
          </h3>
          <ul className="mb-9 list-none">
            {[
              "High-angle bench press footage — test whether bringing the head into frame resolves detection",
              "Absolute velocity calibration — checkerboard reference or range-of-motion estimation to output m/s",
            ].map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 border-b border-border py-2.5 text-[13px] leading-[1.6] text-muted-foreground before:flex-shrink-0 before:font-bold before:text-accent before:content-['→']"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://github.com/julianty/barbell-speed-estimator"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-[12px] font-medium tracking-[0.025em] text-primary-foreground transition-colors duration-150 hover:bg-accent"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <IconBrandGithub size={14} />
              GitHub
            </a>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-transparent px-5 py-2.5 text-[12px] font-medium tracking-[0.025em] text-foreground transition-all duration-150 hover:border-foreground hover:bg-foreground/5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ← All projects
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
