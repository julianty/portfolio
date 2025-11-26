import React from "react";
import Chatbox from "./chatbox/Chatbox";

function HeroSection() {
  const [active, setActive] = React.useState(false);
  const boxRef = React.useRef(null);
  return (
    <section className="h-[90vh] flex flex-col gap-5 justify-center items-center bg-radial from-slate-800 to-70% to-background">
      {
        <div
          className={`flex flex-col items-center transition-all duration-1000 ease-in-out z-0 ${
            active
              ? "opacity-0 scale-95 translate-y-25 pointer-events-none"
              : "opacity-100 scale-100 translate-y-0"
          }`}
        >
          <h1>Hi, I'm Julian 👋</h1>
          <h4>Full Stack Developer</h4>
        </div>
      }
      <div
        tabIndex={-1}
        ref={boxRef}
        onClick={() => setActive(true)}
        onBlur={() => setActive(false)}
        className="z-10"
      >
        <Chatbox active={active} />
      </div>
    </section>
  );
}

export default HeroSection;
