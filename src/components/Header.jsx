import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// 🔒 SECURITY: whitelist explícita de códigos de idioma permitidos.
// Previene XSS por inyección de valores maliciosos en localStorage.
const ALLOWED_LANGS = new Set(["es", "en", "ca", "de", "it", "fr"]);
const DEFAULT_LANG = "es";

/**
 * Valida y sanitiza el código de idioma recuperado de localStorage.
 * Solo acepta valores que estén en la whitelist ALLOWED_LANGS.
 */
const sanitizeLang = (lang) => {
  if (typeof lang !== "string") return DEFAULT_LANG;
  // Solo letras minúsculas, máximo 5 caracteres (RFC 5646)
  const clean = lang.trim().toLowerCase().slice(0, 5);
  return ALLOWED_LANGS.has(clean) ? clean : DEFAULT_LANG;
};

const flags = [
  { code: "es", label: "Español", src: "https://flagcdn.com/w40/es.png" },
  { code: "en", label: "English", src: "https://flagcdn.com/w40/us.png" },
  {
    code: "ca",
    label: "Valencià",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_the_Land_of_Valencia_%28official%29.svg/1280px-Flag_of_the_Land_of_Valencia_%28official%29.svg.png",
  },
  { code: "de", label: "Deutsch", src: "https://flagcdn.com/w40/de.png" },
  { code: "it", label: "Italiano", src: "https://flagcdn.com/w40/it.png" },
  { code: "fr", label: "Français", src: "https://flagcdn.com/w40/fr.png" },
];

const Header = () => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(DEFAULT_LANG);

  const onChangeLanguage = (lang) => {
    // 🔒 SECURITY: validar antes de guardar/aplicar
    const safeLang = sanitizeLang(lang);
    i18n.changeLanguage(safeLang);
    try {
      localStorage.setItem("language", safeLang);
    } catch {
      // localStorage puede estar bloqueado en modo privado/incógnito
    }
    setActiveLang(safeLang);
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem("language");
      // 🔒 SECURITY: sanitizar antes de usar
      const language = sanitizeLang(raw);
      i18n.changeLanguage(language);
      setActiveLang(language);
    } catch {
      // Si localStorage no está disponible, usar idioma por defecto
      i18n.changeLanguage(DEFAULT_LANG);
    }
  }, []);

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo / Name */}
          <motion.a
            href="#home"
            className="text-xl font-primary font-bold tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gradient">EL</span>
            <span className="text-white/60 text-sm ml-1 font-secondary font-light hidden sm:inline">
              dev
            </span>
          </motion.a>

          {/* Language Switcher */}
          <div className="flex gap-x-2 sm:gap-x-3 items-center glass-card px-4 py-2">
            {flags.map((flag) => (
              <motion.button
                key={flag.code}
                onClick={() => onChangeLanguage(flag.code)}
                title={flag.label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <img
                  src={flag.src}
                  alt={flag.label}
                  className={`w-7 h-auto rounded-sm transition-all duration-300 ${
                    activeLang === flag.code
                      ? "ring-2 ring-accent ring-offset-1 ring-offset-black/50 brightness-110"
                      : "opacity-60 hover:opacity-100 grayscale-[30%] hover:grayscale-0"
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
