/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TechnologiesExperience from "./TechnologiesExperience";

import advanteLogo from "../../assets/img/advanteLogo.jpg";
import creativeLogo from "../../assets/img/plusCreativeLogo.jpg";
import marzhalLogo from "../../assets/img/marzhalLogo.jfif";
import TimeLineImg from "../../customComponents/TimeLineImg";
import cocolabLogo from "../../assets/img/cocolabLogo.jpg";

import {
  AdvanteTechnologies,
  ClaseAzulTechnologies,
  CocolabTechnologies,
  CreativeTechnologies,
  MarzhalTechnologies,
} from "../../utils/TechnologiesData";

const ExperienceArray = [
  {
    position: "Desarrollador Frontend Freelance",
    company: "Clase Azul",
    description:
      "Colaboré en un sistema de reservas y gestión de contenido web para Clase Azul. Diseñé e implementé flujos de UI, desarrollé pantallas con Next.js y Tailwind CSS, e integré consumo de APIs de NestJS mediante RTK Query.",
    date: "Diciembre 2025 - Actualidad",
    img: "https://play-lh.googleusercontent.com/pHmPazN_Q7JIW32XGxSBEcRVS_xQDGS58O4MTTTwpObaKDOPWJS58eoCuaEbGVKxC4I",
    technologies: ClaseAzulTechnologies,
  },
  {
    position: "Desarrollador Fullstack",
    company: "COCOLAB International",
    description:
      "Participé en una plataforma para Papalote Museo del Niño con módulos de gestión de usuarios y contenidos. Desarrollé interfaces administrativas con Next.js y Material UI, y construí CRUDs desde el frontend usando Refine y Supabase.",
    date: "Diciembre 2024 - Agosto 2025",
    img: cocolabLogo,
    technologies: CocolabTechnologies,
  },
  {
    position: "Desarrollador Fullstack",
    company: "Advante Digital",
    description:
      "Trabajé en proyectos web con responsabilidades frontend y backend, adaptando tecnologías como React, Next.js, Node.js, GraphQL, Firebase, Stripe y Redux Toolkit según las necesidades de cada producto.",
    date: "Octubre 2022 - Octubre 2024",
    img: advanteLogo,
    technologies: AdvanteTechnologies,
  },
  {
    position: "Desarrollador Frontend (Prácticas)",
    company: "4 Plus 1 Creative (Durango)",
    description:
      "Desarrollé desde cero el frontend de una aplicación de facturación y colaboré con backend para asegurar una integración clara entre interfaz, endpoints y flujos principales del sistema.",
    date: "Septiembre 2021 - Enero 2022",
    img: creativeLogo,
    technologies: CreativeTechnologies,
  },
  {
    position: "Desarrollador Frontend (Prácticas)",
    company: "Marzhal Hackers",
    description:
      "Participé en Fakturor, una herramienta web para revisar proveedores con problemas ante el SAT. Contribuí al frontend web con Angular y después desarrollé una aplicación móvil con Ionic y Angular, incluyendo diseño de interfaz en Adobe XD.",
    date: "Mayo 2020 - Diciembre 2020",
    img: marzhalLogo,
    technologies: MarzhalTechnologies,
  },
];

function Experience({ theme }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="px-3 lg:px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full flex justify-center my-8"
      >
        <h2 className="text-4xl text-white font-bold text-center">
          Experiencia
        </h2>
      </motion.div>
      <VerticalTimeline animate={!isMobile}>
        {theme === "dark" ? (
          <>
            {ExperienceArray.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#323453",
                  color: "#fff",
                  border: "1px solid #414467",
                  borderRadius: "8px",
                }}
                contentArrowStyle={{ borderRight: "7px solid  #323453" }}
                date={experience.date}
                icon={<TimeLineImg imageUrl={experience.img} />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-semibold">
                  {experience.position}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-base font-medium text-[#A2A3BB]">
                  {experience.company}
                </h4>
                <p className="text-sm leading-relaxed">
                  {experience.description}
                </p>
                <div>
                  <TechnologiesExperience
                    technologies={experience.technologies}
                  />
                </div>
              </VerticalTimelineElement>
            ))}
          </>
        ) : (
          <>
            {ExperienceArray.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work before:bg-primary"
                contentStyle={{
                  background: "#fff",
                  color: "#2B2D42",
                  border: "2px solid #2B2D42",
                  borderRadius: "8px",
                }}
                contentArrowStyle={{ borderRight: "7px solid " }}
                date={experience.date}
                icon={<TimeLineImg imageUrl={experience.img} />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-semibold">
                  {experience.position}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-base font-medium text-[#A2A3BB]">
                  {experience.company}
                </h4>
                <p className="text-sm leading-relaxed">
                  {experience.description}
                </p>
                <div>
                  <TechnologiesExperience
                    technologies={experience.technologies}
                  />
                </div>
              </VerticalTimelineElement>
            ))}
          </>
        )}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
