import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-3">
      <div className="flex justify-between items-center rounded-full border border-border/50 bg-card/70 backdrop-blur-md px-5 py-2.5 shadow-sm">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-semibold tracking-tight text-foreground"
        >
          julianty
        </Link>
        <div className="flex gap-1">
          <NavHashLink
            smooth
            to="/#projects"
            className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Projects
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#contact"
            className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact
          </NavHashLink>
        </div>
      </div>
    </nav>
  );
}
