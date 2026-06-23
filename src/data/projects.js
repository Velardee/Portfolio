import TypescriptIcon from "../assets/icons/typescript.svg";
import ReactSvg from "../assets/icons/react.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";

import WeatheryImg from "../assets/img/projects/WeatheryImg.png";
import CronoRestImg from "../assets/img/projects/CronoRestSS.png";

export const projectsData = [
  {
    id: 1,
    name: "Weathery",
    description:
      "Aplicación del clima con datos en tiempo real, geolocalización y una interfaz responsiva pensada para consultar rápido la información principal.",
    highlights: [
      "Integra Open-Meteo para clima actual y pronóstico según ubicación.",
      "Resuelve estados de carga, permisos de geolocalización y zonas horarias.",
      "Construida con componentes reutilizables y tipado con TypeScript.",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    technologiesIcons: [
      { name: "React", src: ReactSvg },
      { name: "TypeScript", src: TypescriptIcon },
      { name: "Tailwind CSS", src: TailwindIcon },
    ],
    image: WeatheryImg,
    link: "https://tryweathery.netlify.app/",
    github: "https://github.com/Velardee/Weathery",
  },
  {
    id: 2,
    name: "CronoRest",
    description:
      "Calculadora de ciclos de sueño que ayuda a elegir horas recomendadas para dormir o despertar mediante una experiencia simple y directa.",
    highlights: [
      "Permite calcular horarios desde la hora de dormir o de despertar.",
      "Prioriza una interacción rápida para usuarios móviles.",
      "Presenta resultados claros con una interfaz ligera en React.",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    technologiesIcons: [
      { name: "React", src: ReactSvg },
      { name: "TypeScript", src: TypescriptIcon },
      { name: "Tailwind CSS", src: TailwindIcon },
    ],
    image: CronoRestImg,
    link: "https://cronorest.netlify.app/",
    github: "https://github.com/Velardee/CronoRest",
  },
];
