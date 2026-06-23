import { motion } from "framer-motion";
import MainLayout from "../../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-3 px-7 lg:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-4xl text-white font-bold text-start">
            Acerca de mí
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="w-14 border-t-4 border-lightPurple"
        ></motion.div>
        <div className="w-full lg:w-4/5">
          <p className="text-xl text-coolGray">
            Soy ingeniero en software especializado en frontend, con experiencia
            fullstack en productos reales para reservas, gestión de contenido,
            dashboards administrativos y aplicaciones web. Trabajo cómodo entre
            diseño e implementación: puedo traducir requerimientos en flujos,
            componentes, estados de interfaz e integraciones con APIs.
            <br />
            <br />
            Busco equipos donde pueda aportar criterio visual, cuidado por la
            experiencia de usuario y ejecución técnica con React, Next.js,
            TypeScript y Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row mt-5 md:mt-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="min-w-24 flex justify-center py-2 px-4 rounded-lg bg-[#6EE7B7] cursor-pointer"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/pdf/CV.pdf"
              className="w-full h-full flex items-center justify-center text-[#1F2235] text-lg font-semibold"
            >
              Ver curriculum
            </a>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
