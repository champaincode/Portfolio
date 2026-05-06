import React from "react";
//motion
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
//variants
import { fadeIn } from "../variants";

import { BsArrowUpRight } from "react-icons/bs";

import DigitalenciaImg from "../assets/digitalencia.png";
import SalvatoreImg from "../assets/salvatore.png";
import BorsalinoImg from "../assets/borsalino.png";
import Img3 from "../assets/portfolio-img3.jpg";

// 🔒 SECURITY: valida que una URL sea https:// o http:// para evitar
// inyección de esquemas peligrosos (javascript:, data:, vbscript:)
const isSafeUrl = (url) => {
  try {
    const { protocol } = new URL(url);
    return protocol === "https:" || protocol === "http:";
  } catch {
    return false;
  }
};

const projects = [
  {
    img: DigitalenciaImg,
    titleKey: "text.service4.name",
    linkKey: "text.service4.link",
    href: "https://digitalencia.es",
    tags: ["Desarrollo Web", "SEO", "UI/UX"],
  },
  {
    img: SalvatoreImg,
    titleKey: "salvatore",
    linkKey: "text.service4.link",
    href: "https://salvatorestudio.com/",
    tags: ["WordPress", "E-commerce"],
  },
  {
    img: Img3,
    titleKey: "WeatherApp",
    linkKey: "demo",
    href: "https://weather-app-nu-bay.vercel.app/",
    tags: ["TypeScript", "React", "API"],
  },
  {
    img: BorsalinoImg,
    titleKey: "borsalino",
    linkKey: "text.service4.link",
    href: "https://gray-donkey-495504.hostingersite.com/",
    tags: ["Desarrollo Web", "TypeScript", "Vite", "React"],
  },
];

const ProjectCard = ({ project, index, t }) => {
  // 🔒 SECURITY: solo renderizar el enlace si la URL es segura
  const safeHref = isSafeUrl(project.href) ? project.href : null;

  return (
  <motion.div
    variants={fadeIn("up", 0.15 * (index + 1))}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.15 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group glass-card gradient-border overflow-hidden cursor-pointer"
  >
    {/* Image Container */}
    <div className="relative overflow-hidden aspect-[16/10]">
      <img
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        src={project.img}
        alt={`Captura de pantalla del proyecto ${t(project.titleKey)}`}
        loading="lazy"
        decoding="async"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Visit Button */}
      {safeHref && (
        <a
          href={safeHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visitar proyecto ${t(project.titleKey)} (abre en nueva pestaña)`}
          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-accent hover:scale-110"
        >
          <BsArrowUpRight className="text-lg" />
        </a>
      )}

      {/* Tags */}
      <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-primary tracking-wider uppercase bg-white/10 backdrop-blur-md rounded-full text-white/90 border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Info */}
    <div className="p-5 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-primary font-bold group-hover:text-accent transition-colors duration-300">
          {t(project.titleKey)}
        </h3>
      </div>
      {safeHref ? (
        <a
          href={safeHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver demo de ${t(project.titleKey)}`}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-sm text-sm relative z-10"
          >
            <span>{t(project.linkKey)}</span>
          </motion.button>
        </a>
      ) : (
        <span className="text-white/30 text-sm">{t(project.linkKey)}</span>
      )}
    </div>
  </motion.div>
  );
};

const Work = () => {
  const { t } = useTranslation();
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        {/* Header Section - Centered */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center text-center mb-16 lg:mb-20"
        >
          <div className="section-divider mb-6" />
          <h2 className="h2 leading-tight text-accent">{t("text.work")}</h2>
          <p className="max-w-xl text-lg text-white/60">
            {t("text.work.description")}
          </p>
        </motion.div>

        {/* Projects Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
