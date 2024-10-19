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

function Experience() {
  //TODO[]: Usar react-timeline-componente si no hacer un diseño propio

  return (
    <section className="px-3 lg:px-3 mb-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full flex justify-center my-8"
      >
        <h2 className="text-4xl text-white font-bold text-center">
          Mi Experiencía
        </h2>
      </motion.div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#323453", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #2F314F" }}
          date="Octubre 2022 - Octubre 2024"
          //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<TimeLineImg imageUrl={advanteLogo} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">
            Desarrollador Fullstack
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-base font-medium text-[#A2A3BB]">
            Advante Digital
          </h4>
          <p className="text-sm">
            Durante mi estancia en la empresa, participé activamente en el
            desarrollo de varios proyectos clave, desempeñando funciones tanto
            en el backend como en el frontend, utilizando tecnologías modernas y
            adaptadas a cada solución.
          </p>
          <div>
            <TechnologiesExperience technologies={AdvanteTechnologies} />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Septiembre 2021 - Enero 2022"
          contentStyle={{ background: "#323453", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #2F314F" }}
          //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<TimeLineImg imageUrl={creativeLogo} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">
            Desarrollador Frontend (Practicas)
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-base font-medium text-[#A2A3BB]">
            4 Plus 1 Creative (Durango)
          </h4>
          <p className="text-sm">
            Durante mi estadía profesional, participé en el desarrollo de una
            aplicación de facturación, asumiendo la responsabilidad de crear el
            frontend desde cero. Colaboré con el equipo de backend para
            garantizar la correcta integración y comunicación entre ambas partes
            del sistema, contribuyendo a la implementación de una solución
            funcional.
          </p>
          <div>
            <TechnologiesExperience technologies={CreativeTechnologies} />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#323453", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #2F314F" }}
          date="Mayo 2020 - Diciembre 2020"
          //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<TimeLineImg imageUrl={marzhalLogo} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">
            Desarrollador Frontend (Practicas)
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-base font-medium text-[#A2A3BB]">
            Marzhal Hackers
          </h4>
          <p className="text-xs">
            Durante mis primeras dos prácticas profesionales, participé en el
            desarrollo de la aplicación Fakturor, una herramienta web para
            verificar si los proveedores tienen problemas con el SAT. <br />
            • Primera instancia: Contribuí al desarrollo frontend de la
            aplicación web utilizando Angular. <br />
            •Segunda instancia: Desarrollé la aplicación móvil desde cero con
            Ionic y Angular, además de encargarme del diseño de la interfaz en
            Adobe XD.
          </p>
          <div>
            <TechnologiesExperience technologies={MarzhalTechnologies} />
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
