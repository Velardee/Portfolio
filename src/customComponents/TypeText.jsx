import { TypeAnimation } from "react-type-animation";

function TypeText() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Ingeniero en software",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Desarrollador web",
        1000,
        "Desarrollador fullstack",
        1000,
        "Desarrollador frontend",
        1000,
      ]}
      repeat={Infinity}
      
    />
  );
}

export default TypeText;
