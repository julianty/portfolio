import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div id="main-stack" className="flex flex-col ">
        <Navbar />
        <section className="flex flex-col mx-auto my-48">
          <h1>Hi, I'm Julian</h1>
          <h4>Full Stack Developer</h4>
        </section>
        <section className="p-4">
          <h2 className="">What I've been working on</h2>
          <div className="flex flex-col md:flex-row">
            <div className="bg-card p-4 rounded-lg">
              <h3>Corpore Sano</h3>
              <img
                // src="Corpore Sano Project Highlight.png"
                className="rounded-lg"
                src="Corpore Sano Highlight.png"
                alt="Corpore Sano"
              />
              <p>A lightweight workout tracking web application</p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3>Project 2</h3>
              <p>Project Description</p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3>Project 3</h3>
              <p>Project Description</p>
            </div>
          </div>
        </section>
      </div>
      {/* <ColorTester /> */}
      {/* <FloatingNav /> */}
    </ThemeProvider>
  );
}

function FloatingNav() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
      <div className="bg-muted flex items-center gap-2 p-2 px-4 rounded-full">
        <a className="p-3 px-4 rounded-full bg-muted-foreground" href="/">
          Home
        </a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
}
function ColorTester() {
  const colors = [
    "--foreground",
    "--background",
    "--card",
    "--card-foreground",
    "--primary",
    "--primary-foreground",
    "--secondary",
    "--secondary-foreground",
    "--muted",
    "--muted-foreground",
    "--accent",
    "--accent-foreground",
    "--destructive",
    "--destructive-foreground",
  ];
  const divs = colors.map((color) => {
    return (
      <div
        className="border-4 w-24 h-24 text-xs flex items-center justify-center text-blue-900"
        style={{ backgroundColor: "hsl(var(" + color + "))" }}
        key={color}
      >
        {" "}
        {color}
      </div>
    );
  });
  return (
    <div className="flex">
      <div className="flex gap-4 flex-wrap">{divs}</div>
    </div>
  );
}
export default App;
