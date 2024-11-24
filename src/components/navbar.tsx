export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold">julianty</div>
      <div className="flex gap-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
