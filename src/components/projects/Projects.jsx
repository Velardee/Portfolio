import { projectsData } from "../../data/projects";
import MainLayout from "../../layouts/MainLayout";
import { motion } from "framer-motion";

function Projects() {
  return (
    <MainLayout>
      <section id="projects" className="flex flex-col gap-3 px-7 lg:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full flex"
        >
          <h2 className="text-4xl text-white font-bold text-start">
            Proyectos seleccionados
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
        <p className="text-lg text-coolGray max-w-3xl">
          Casos pequeños pero completos donde muestro consumo de APIs,
          decisiones de interfaz, manejo de estado y despliegue de productos
          responsivos.
        </p>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#323453] mt-5 rounded-lg shadow-lg p-5 md:p-6 flex flex-col lg:flex-row gap-6 border border-[#414467]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full lg:w-1/2 aspect-video object-cover rounded-lg transition-all duration-500"
            />
            <div className="flex flex-col justify-between gap-4 lg:w-1/2">
              <div className="space-y-3">
                <p className="text-2xl font-semibold text-white">
                  {project.name}
                </p>
                <p className="text-coolGray">{project.description}</p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-white flex gap-2 leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6EE7B7]"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#555985] px-3 py-1 text-xs font-medium text-coolGray"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 justify-center lg:justify-start w-full flex-wrap">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-5 bg-[#6EE7B7] text-[#1F2235] rounded-lg w-fit cursor-pointer"
                >
                  <span className="font-medium">Ver proyecto</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-5 border border-mediumPurple rounded-lg w-fit cursor-pointer"
                >
                  <span className="font-medium">Código fuente</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </MainLayout>
  );
}

export default Projects;
