import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold">
        <Link to="/">julianty</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/about">About</Link>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
