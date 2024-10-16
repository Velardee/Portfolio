import { TypeAnimation } from "react-type-animation";

function TypeText() {
  return (
    <TypeAnimation
      sequence={[
        "Ingeniero en Software",
        1000,
        "Desarrollador Fullstack",
        1000,
        "Desarrollador Frontend",
        1000,
      ]}
      repeat={Infinity}
    />
  );
}

export default TypeText;
