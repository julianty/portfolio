import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold">
        <Link to="/">julianty</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/about">About</Link>
        <NavHashLink smooth to="#projects">
          Projects
        </NavHashLink>
        <NavHashLink smooth to="#contact">
          Contact
        </NavHashLink>
      </div>
    </nav>
  );
}
