import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
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
      <Contact />
    </>
  );
}

export default App;
