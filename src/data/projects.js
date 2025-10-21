import TypescriptIcon from "../assets/icons/typescript.svg";
import ReactSvg from "../assets/icons/react.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";

import WeatheryImg from "../assets/img/projects/WeatheryImg.png";

export const projectsData = [
    {
        id: 1,
        name: "Weathery 🌤️",
        description: 
        `Weathery es una app del clima desarrollada con React, TypeScript y Vite, que obtiene datos en tiempo real desde Open-Meteo y usa geolocalización para mostrar el clima actual y pronóstico del usuario. 
        Cuenta con una interfaz moderna y responsiva creada con TailwindCSS.

        Durante el proyecto reforcé conceptos como consumo de APIs, manejo de zonas horarias (Luxon), geolocalización del navegador, y buenas prácticas de React + TypeScript.`,
        technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
        technologiesIcons: [
            { name: "React", src: ReactSvg },
            { name: "TypeScript", src: TypescriptIcon },
            { name: "TailwindCSS", src: TailwindIcon }
        ],
        image: WeatheryImg,
        link: "https://tryweathery.netlify.app/",
        github: "https://github.com/Velardee/Weathery"

    }
]