import React from "react";
import Imagen from "../assets/aboutmee.png";

import CV_en from "../assets/Edgar_Lagos_CV_2026_en.html";
import CV_es from "../assets/Edgar_Lagos_CV_2026_es.html";
import CV_ca from "../assets/Edgar_Lagos_CV_2026_ca.html";
import CV_de from "../assets/Edgar_Lagos_CV_2026_de.html";
import CV_fr from "../assets/Edgar_Lagos_CV_2026_fr.html";
import CV_it from "../assets/Edgar_Lagos_CV_2026_it.html";

//icons
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// type animation
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
//motion
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//varaints
import { fadeIn } from "../variants";

// 🔒 SECURITY: whitelist explícita de códigos de idioma válidos para el CV.
// Previene path traversal / open-redirect si i18n.language fuera manipulado.

const Banner = () => {
  const { t, i18n } = useTranslation();

  // 🔒 SECURITY: mapa cerrado — solo idiomas conocidos.
  // Si i18n.language tuviese un valor inesperado, se usa en.
  const cvMap = {
    en: CV_en,
    es: CV_es,
    ca: CV_ca,
    de: CV_de,
    fr: CV_fr,
    it: CV_it,
  };

  const safeLang = Object.prototype.hasOwnProperty.call(cvMap, i18n.language)
    ? i18n.language
    : "en";
  const currentCv = cvMap[safeLang];

  // Nombre de descarga seguro: solo alfanumérico + guión bajo
  const safeDownloadName = `Edgar_Lagos_CV_2026_${safeLang}.html`;

  return (
    <section
      className="min-h-[85vh] lg:min-h-[calc(100vh-100px)] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-4 lg:flex-row lg:items-center
        lg:gap-x-12"
        >
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="mb-2"
            >
              <span className="text-accent/80 font-primary text-sm tracking-[6px] uppercase">
                FullStack Developer
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="text-[44px] font-bold leading-[0.9] lg:text-[80px] mb-2"
            >
              EDGAR{" "}
              <span className="text-gradient">LAGOS</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="mb-6 text-[32px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"
            >
              <div className="text-white/70 mr-4"> {t("Iam")} </div>
              <TypeAnimation
                sequence={[
                  t("role.fullstack"),
                  2000,
                  t("role.developer"),
                  2000,
                  t("role.freelance"),
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-white/70 leading-relaxed"
            >
              {" "}
              {t("text.aboutme")}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              className="flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0"
            >
              <Link activeClass="active" smooth={true} spy={true} to="contact">
                <button className="btn btn-lg relative z-10">
                  <span>{t("contact")}</span>
                </button>
              </Link>
              <a
                href={currentCv}
                className="text-gradient btn-link"
                download={safeDownloadName}
                aria-label={`Descargar CV en ${safeLang.toUpperCase()}`}
              >
                {t("downloadCv")}
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              animate="show"
              className="flex text-[22px] gap-x-5 max-w-max mx-auto lg:mx-0"
            >
              {[
                {
                  href: "https://www.linkedin.com/in/edgar-lagos/",
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/champaincode",
                  icon: <FaGithub />,
                  label: "GitHub",
                },
                {
                  href: "https://api.whatsapp.com/send?phone=542914400753&text=Hola%20Edgar%20Lagos.%20Me%20interesa%20saber%20m%C3%A1s%20de%20ti%20",
                  icon: <FaWhatsapp />,
                  label: "WhatsApp",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-accent transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-accent/10 blur-[80px] rounded-full" />
            <img
              src={Imagen}
              width={482}
              height={800}
              alt="Edgar Lagos, FullStack Developer"
              className="relative z-10 drop-shadow-2xl w-full"
              /* LCP element: cargamos con máxima prioridad y sin bloquear render */
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
