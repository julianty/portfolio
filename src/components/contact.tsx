import {
  IconBrandLinkedin,
  IconMail,
  IconBrandGithub,
} from "@tabler/icons-react";
import profilePicture from "@/assets/meInSuitSquare.jpg";
export default function Contact() {
  return (
    <div className="px-8 my-8 flex flex-col gap-4 flex-1 justify-center mx-auto">
      <div className="flex gap-8 items-center">
        <a href="https://www.linkedin.com/in/julian-ty/" target="_blank">
          <img
            src={profilePicture}
            alt="Julian Ty"
            className="rounded-full size-24"
          />
        </a>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold indent-0">Alexander Julian Ty</h2>
          <div className="flex gap-4">
            <a href="mailto:alexanderjulianty@gmail.com">
              <IconMail />
            </a>
            <a href="https://www.linkedin.com/in/julian-ty/" target="_blank">
              <IconBrandLinkedin />
            </a>
            <a href="https://github.com/julianty" target="_blank">
              <IconBrandGithub />
            </a>
          </div>
        </div>
      </div>
      <p>
        <strong className="text-xl">Thank you</strong> for taking the time to
        look over my work! <br></br>
        If you have any feedback or would like to connect, I would love to hear
        from you.
        <br></br>
        You can reach me at{" "}
        <a href="mailto:alexanderjulianty@gmail.com" className="text-blue-500">
          alexanderjulianty@gmail.com
        </a>
      </p>
    </div>
  );
}
