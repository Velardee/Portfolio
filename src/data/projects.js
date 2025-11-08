import TypescriptIcon from "../assets/icons/typescript.svg";
import ReactSvg from "../assets/icons/react.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";

import WeatheryImg from "../assets/img/projects/WeatheryImg.png";
import CronoRestImg from "../assets/img/projects/CronoRestSS.png";

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

    },
    {
        id: 2,
        name: "CronoRest 😴",
        description: 
        `CronoRest es una app de calculadora de ciclos de sueño, la app calcula automáticamente tus ciclos de sueño y te muestra las horas ideales para dormir o despertar, basadas en la ciencia del sueño profundo y las fases REM.
        Solo elige tu hora de despertar o cuándo quieres dormir, y CronoRest hace el resto.`,
        technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
        technologiesIcons: [
            { name: "React", src: ReactSvg },
            { name: "TypeScript", src: TypescriptIcon },
            { name: "TailwindCSS", src: TailwindIcon }
        ],
        image: CronoRestImg,
        link: "https://cronorest.netlify.app/",
        github: "https://github.com/Velardee/CronoRest"
    }
]