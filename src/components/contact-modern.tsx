import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import profilePicture from "@/assets/meInSuitSquare.jpg";

export default function ContactModern() {
  return (
    <div className="mx-auto my-8 w-full max-w-4xl px-4 md:px-6">
      <div className="rounded-2xl border border-border/50 bg-card/60 p-6 shadow-sm backdrop-blur-sm md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/julian-ty/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Open LinkedIn profile"
            >
              <img
                src={profilePicture}
                alt="Alexander Julian Ty"
                className="size-24 rounded-full border border-border/50 object-cover"
              />
            </a>

            <div className="flex flex-col gap-1">
              <h2 className="indent-0 text-2xl font-semibold tracking-tight text-foreground">
                Alexander Julian Ty
              </h2>
              <p className="text-sm text-muted-foreground">
                Full Stack Developer · Open to software engineering
                opportunities
              </p>
            </div>
          </div>

          <a
            href="mailto:alexanderjulianty@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <IconMail size={16} />
            Email Me
          </a>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Thank you for taking the time to review my work. If you have feedback,
          want to discuss a role, or would like to collaborate, I would be glad
          to connect.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="https://www.linkedin.com/in/julian-ty/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <IconBrandLinkedin size={16} />
            LinkedIn
          </a>

          <a
            href="https://github.com/julianty"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <IconBrandGithub size={16} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
