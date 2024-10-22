import MainLayout from "../../layouts/MainLayout";
import { motion } from "framer-motion";

import Location from "../../assets/icons/location.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Mail from "../../assets/icons/mail.svg";
import GitHub from "../../assets/icons/github.svg";

function Contact() {
  return (
    <MainLayout>
      <section className="flex flex-col gap-3 my-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full flex"
        >
          <h2 className="text-4xl text-white font-bold text-start">Contacto</h2>
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
        <div className="w-full lg:w-2/4">
          <p className="text-xl text-[#A2A3BB]">
            Actualmente me encuentro disponible para comenzar nuevos proyectos,
            Si estás buscando a un desarrollador web o simplemente quieres saber
            más sobre mi trabajo, no dudes en ponerte en contacto.
          </p>
          <div className="flex flex-col gap-3 justify-center my-4">
            <p className="text-lg font-semibold">Mis redes:</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/hugo-velarde-5469b6289"
              className="flex flex-row gap-4"
            >
              <img src={LinkedIn} alt="Location icon" className="h-6" />
              <p className="text-lg font-normal">LinkedIn</p>
            </a>
            <a
              href="mailto:hugovela15@gmail.com"
              className="flex flex-row gap-4"
            >
              <img src={Mail} alt="Location icon" className="h-6" />
              <p className="text-lg font-normal">hugovela15@gmail.com</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Velardee"
              className="flex flex-row gap-4"
            >
              <img src={GitHub} alt="Location icon" className="h-6" />
              <p className="text-lg font-normal">Github</p>
            </a>
            <div className="flex flex-row gap-4">
              <img src={Location} alt="Location icon" className="h-6" />
              <p className="text-lg font-normal">Durango, Dgo. México</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Contact;
