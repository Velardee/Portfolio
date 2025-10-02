import { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Welcome from "./components/welcome";

//*App is prepare to dark mode, but now is disabled

function App() {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState("dark");

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.querySelector("html").classList.add("dark");
  //   } else {
  //     document.querySelector("html").classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleChangeTheme = () => {
  //   setTheme((prevTheme) => (prevTheme == "dark" ? "light" : "dark"));
  // };

  return (
    <div className="bg-primary">
      <Welcome />
      <Experience theme={theme} />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
