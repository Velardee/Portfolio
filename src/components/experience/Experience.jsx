/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import TechnologiesExperience from "./TechnologiesExperience";

import advanteLogo from "../../assets/img/advanteLogo.jpg";
import creativeLogo from "../../assets/img/plusCreativeLogo.jpg";
import marzhalLogo from "../../assets/img/marzhalLogo.jfif";
import TimeLineImg from "../../customComponents/TimeLineImg";
import {
  AdvanteTechnologies,
  CreativeTechnologies,
  MarzhalTechnologies,
} from "../../utils/TechnologiesData";
import { useState } from "react";
import { useEffect } from "react";

const ExperienceArray = [
  {
    position: "Desarrollador Fullstack",
    company: "Advante Digital",
    description:
      "Durante mi proceso en la empresa, participé activamente en el desarrollo de varios proyectos clave, desempeñando funciones tanto en el backend como en el frontend, utilizando tecnologías modernas y adaptadas a cada solución.",
    date: "Octubre 2022 - Octubre 2024",
    img: advanteLogo,
    technologies: AdvanteTechnologies,
  },
  {
    position: "Desarrollador Frontend (Practicas)",
    company: "4 Plus 1 Creative (Durango)",
    description:
      "Durante mi estadía profesional, participé en el desarrollo de una aplicación de facturación, asumiendo la responsabilidad de crear el frontend desde cero. Colaboré con el equipo de backend paragarantizar la correcta integración y comunicación entre ambas partes del sistema, contribuyendo a la implementación de una solución funcional.",
    date: "Septiembre 2021 - Enero 2022",
    img: creativeLogo,
    technologies: CreativeTechnologies,
  },
  {
    position: "Desarrollador Frontend (Practicas)",
    company: "Marzhal Hackers",
    description: `Durante mis primeras dos prácticas profesionales, participé en el desarrollo de la aplicación Fakturor, una herramienta web para verificar si los proveedores tienen problemas con el SAT.\n
      • Primera instancia: Contribuí al desarrollo frontend de la aplicación web utilizando Angular.\n
      • Segunda instancia: Desarrollé la aplicación móvil desde cero con Ionic y Angular, además de encargarme del diseño de la interfaz en Adobe XD.`,
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
    <section className="px-3 lg:px-0 mb-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full flex justify-center my-8"
      >
        <h2 className="text-4xl text-primary dark:text-white font-bold text-center">
          Mi Experiencía
        </h2>
      </motion.div>
      <VerticalTimeline animate={!isMobile}>
        {theme === "dark" ? (
          <>
            {ExperienceArray.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#323453", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  #2F314F" }}
                date={experience.date}
                //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<TimeLineImg imageUrl={experience.img} />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-semibold">
                  {experience.position}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-base font-medium text-[#A2A3BB]">
                  {experience.company}
                </h4>
                {experience.description.split("\n").map((line, index) => (
                  <p className="text-sm" key={index}>
                    {line}
                  </p>
                ))}
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
            {" "}
            {ExperienceArray.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work before:bg-primary"
                contentStyle={{
                  background: "#fff",
                  color: "#2B2D42",
                  border: "2px solid #2B2D42",
                  borderRadius: "15px",
                }}
                contentArrowStyle={{ borderRight: "7px solid " }}
                date={experience.date}
                //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<TimeLineImg imageUrl={experience.img} />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-semibold">
                  {experience.position}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-base font-medium text-[#A2A3BB]">
                  {experience.company}
                </h4>
                <p className="text-sm">{experience.description}</p>
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
