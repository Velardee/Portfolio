import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Welcome from "./components/welcome";

function App() {
  return (
    <>
      <Welcome />
      <Experience />
      <About />
      <Skills />
    </>
  );
}

export default App;
