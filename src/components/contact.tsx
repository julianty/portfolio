import {
  IconBrandLinkedin,
  IconMail,
  IconBrandGithub,
} from "@tabler/icons-react";
import profilePicture from "@/assets/meInSuitSquare.jpg";
export default function Contact() {
  return (
    <div className="px-8 my-8 flex flex-col gap-4 flex-1 justify-center">
      <div className="flex gap-4 items-center">
        <img
          src={profilePicture}
          alt="Julian Ty"
          className="rounded-full size-24"
        />
        <div>
          <h2>Alexander Julian Ty</h2>
          <div className="flex gap-2">
            <a href="mailto:alexanderjulianty@gmail.com">
              <IconMail />
            </a>
            <a href="https://www.linkedin.com/in/julian-ty/">
              <IconBrandLinkedin />
            </a>
            <a href="https://github.com/julianty">
              <IconBrandGithub />
            </a>
          </div>
        </div>
      </div>
      <p>
        <strong>Thank you</strong> for taking the time to look over my work! If
        you have any feedback or would like to connect, I would love to hear
        from you.
      </p>
      <p>
        You can reach me at{" "}
        <a href="mailto:alexanderjulianty@gmail.com">
          alexanderjulianty@gmail.com
        </a>
      </p>
    </div>
  );
}
