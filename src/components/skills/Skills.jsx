import MainLayout from "../../layouts/MainLayout";
import { motion } from "framer-motion";
import CardSkills from "./CardSkills";
import {
  BackendTechnologies,
  FrontendTechnologies,
  LearningTechnologies,
  ToolsTechnologies,
} from "../../utils/TechnologiesData";

function Skills() {
  return (
    <MainLayout>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full flex justify-center my-8"
        >
          <h2 className="text-4xl text-white font-bold text-start animate-fade-in">
            Habilidades
          </h2>
        </motion.div>
        <section className="w-full flex flex-col justify-center gap-5 px-7 md:px-0 md:grid lg:grid-cols-2 md:gap-7">
          <CardSkills title={"Frontend"} technologies={FrontendTechnologies} />
          <CardSkills title={"Backend"} technologies={BackendTechnologies} />
          <CardSkills title={"Herramientas"} technologies={ToolsTechnologies} />
          <CardSkills
            title={"Aprendiendo"}
            technologies={LearningTechnologies}
          />
        </section>
      </div>
    </MainLayout>
  );
}

export default Skills;
