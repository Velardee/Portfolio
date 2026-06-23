import Lottie from "react-lottie";
import welcomeAnimation from "../../lotties/welcomeAnimation.json";
import TypeText from "../../customComponents/TypeText";
import MainLayout from "../../layouts/MainLayout";

function Welcome() {
  const animationOptions = {
    loop: true,
    autoPlay: true,
    animationData: welcomeAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <MainLayout hero>
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 px-6 lg:px-0">
        <div className="flex flex-col gap-5 justify-center w-full md:max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6EE7B7] text-center md:text-start">
            Frontend & Fullstack Developer
          </p>
          <h1 className="text-4xl lg:text-6xl text-white font-bold text-center md:text-start leading-tight">
            Hugo Velarde
          </h1>
          <h2 className="text-2xl md:text-3xl text-white font-bold text-center md:text-start">
            Construyo interfaces claras como{" "}
            <span className="text-mediumPurple whitespace-nowrap">
              <TypeText />
            </span>
          </h2>
          <p className="text-lg text-coolGray text-center md:text-start max-w-2xl">
            Ingeniero en software con más de 2 años creando productos web con
            React, Next.js, TypeScript y diseño UI/UX. Me enfoco en convertir
            flujos complejos en experiencias rápidas, mantenibles y fáciles de
            usar.
          </p>
          <div className="grid grid-cols-3 gap-3 text-center md:text-start">
            <div className="border border-[#4A4D73] rounded-lg p-3">
              <p className="text-2xl font-bold text-white">3+</p>
              <p className="text-xs text-coolGray">años de experiencia</p>
            </div>
            <div className="border border-[#4A4D73] rounded-lg p-3">
              <p className="text-2xl font-bold text-white">Fullstack</p>
              <p className="text-xs text-coolGray">Front + Back</p>
            </div>
            <div className="border border-[#4A4D73] rounded-lg p-3">
              <p className="text-2xl font-bold text-white">UI/UX</p>
              <p className="text-xs text-coolGray">enfoque de producto</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="rounded-lg bg-[#6EE7B7] px-5 py-3 text-center font-semibold text-[#1F2235] transition hover:bg-[#8EF0C9]"
            >
              Ver proyectos
            </a>
            <a
              href="/pdf/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-mediumPurple px-5 py-3 text-center font-semibold text-white transition hover:bg-[#323453]"
            >
              Descargar CV
            </a>
          </div>
        </div>
        <div className="animate-fade-in">
          <div className="sm:visible lg:hidden">
            <Lottie
              options={animationOptions}
              height={250}
              width={250}
              aria-label="Animación"
            />
          </div>
          <div className="hidden lg:flex">
            <Lottie
              options={animationOptions}
              height={500}
              width={500}
              aria-label="Animación"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Welcome;
