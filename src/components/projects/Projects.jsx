import { projectsData } from "../../data/projects";
import MainLayout from "../../layouts/MainLayout";
import { motion } from "framer-motion";

function Projects() {
  return (
    <MainLayout>
      <section className="flex flex-col gap-3 my-5 px-7 lg:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full flex"
        >
          <h2 className="text-4xl text-white font-bold text-start">
            Proyectos
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
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#323453] mt-3 rounded-xl shadow-lg p-6 flex flex-col lg:flex-row gap-6"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-1/2 aspect-video object-cover rounded-lg transition-all duration-500"
            />
            <div className="flex flex-col justify-evenly lg:w-1/2">
              <p className="text-2xl font-semibold">{project.name}</p>
              <p className="text-coolGray ">{project.description}</p>
              <div className="flex gap-3 justify-center lg:justify-start w-full mt-5 lg:mt-3 flex-wrap">
                <a
                  href={project.link}
                  target="_blank"
                  className="py-2 px-5 bg-mediumPurple rounded-lg w-fit cursor-pointer"
                >
                  <span className="font-medium">Ver Proyecto</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="py-2 px-5 border border-mediumPurple rounded-lg w-fit cursor-pointer"
                >
                  <span className="font-medium">Código Fuente</span>
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
