import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaHeart } from "react-icons/fa";
import { fadeIn } from "../variants";

// 🔒 SECURITY: todos los enlaces externos tienen rel="noopener noreferrer"
// para prevenir Tab-napping (target="_blank" expone window.opener).
const socials = [
  {
    href: "https://www.linkedin.com/in/edgar-lagos/",
    icon: <FaLinkedin className="text-3xl" />,
    label: "LinkedIn",
    ariaLabel: "Perfil de Edgar Lagos en LinkedIn (abre en nueva pestaña)",
  },
  {
    href: "https://wa.me/34617575517",
    icon: <FaWhatsapp className="text-3xl" />,
    label: "WhatsApp",
    ariaLabel: "Contactar a Edgar Lagos por WhatsApp (abre en nueva pestaña)",
  },
  {
    href: "mailto:edgarlagos.355@gmail.com",
    icon: <FaEnvelope className="text-3xl" />,
    label: "Email",
    ariaLabel: "Enviar email a Edgar Lagos",
  },
  {
    href: "https://github.com/champaincode",
    icon: <FaGithub className="text-3xl" />,
    label: "GitHub",
    ariaLabel: "Perfil de Edgar Lagos en GitHub (abre en nueva pestaña)",
  },
];

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="section py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-12"
          >
            <div className="section-divider mb-6" />
            <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide font-primary">
              {t("text.contact")}
            </h4>
            <h2 className="text-[42px] lg:text-[80px] leading-none mb-12 font-primary">
              {t("text.contact.one")}
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-wrap gap-6 items-center justify-center mb-20 lg:mb-28"
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                whileHover={{ y: -6, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card gradient-border px-8 py-5 flex items-center gap-x-3 text-white/70 hover:text-accent transition-colors duration-300 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
                <span className="text-lg font-primary font-medium">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white/30 text-sm font-secondary flex items-center gap-x-1"
          >
            <span>© {new Date().getFullYear()} Edgar Lagos. Made with</span>
            <FaHeart className="text-accent/50 text-xs" />
            <span>& React</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
