import { motion } from "framer-motion";

function About() {
  return (
    <section className="h-screen flex justify-center items-center px-7 lg:px-0">
      <div className="w-full flex flex-col md:max-w-[700px] lg:min-w-[1000px] xl:min-w-[1050px] max-w-5xl gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-4xl text-white font-bold text-start animate-fade-in">
            Acerca de mi
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
          className="w-14 border-t-4 border-[#B3B7EE]"
        ></motion.div>
        <div className="w-full lg:w-3/4">
          <p className="text-xl text-[#A2A3BB]">
            Mi nombre es Hugo Velarde y soy ingeniero en software con más de dos
            años de experiencia como desarrollador fullstack, con un especial
            interés y pasión por el desarrollo frontend. Además, poseo
            conocimientos y un marcado interés en el diseño UI/UX, lo que me
            permite crear interfaces intuitivas y atractivas. <br />
            Estoy comprometido con seguir mejorando mis habilidades y ofrecer
            siempre lo mejor en cada proyecto.
          </p>
        </div>
        <div className="flex w-2/6 gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="min-w-24 flex justify-center py-1 px-3 rounded-xl bg-blue-500 cursor-pointer"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/pdf/CV.pdf"
              className="w-full h-full flex items-center justify-center text-white text-lg font-medium"
            >
              Curriculum
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="min-w-24 rounded-xl bg-gradient-to-r from-blue-500  to-indigo-800 cursor-pointer"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hugo-velarde-5469b6289"
              className="w-full h-full flex items-center justify-center text-white text-lg font-medium"
            >
              LinkedIn
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="min-w-24 rounded-xl bg-gradient-to-r from-blue-500  to-indigo-800 cursor-pointer"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Velardee"
              className="w-full h-full flex items-center justify-center text-white text-lg font-medium"
            >
              Github
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;