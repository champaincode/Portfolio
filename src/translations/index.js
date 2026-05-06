import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./en.json";
import esTranslation from "./es.json";
import deTranslation from "./de.json";
import itTranslation from "./it.json";
import frTranslation from "./fr.json";
import caTranslation from "./ca.json"; // Valencian/Catalan

// 🔒 SECURITY: whitelist de idiomas permitidos.
// Solo se aceptarán detecciones automáticas dentro de este set.
const SUPPORTED_LNGS = ["es", "en", "ca", "de", "it", "fr"];

const resources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation },
  de: { translation: deTranslation },
  it: { translation: itTranslation },
  fr: { translation: frTranslation },
  ca: { translation: caTranslation },
};

i18n
  .use(LanguageDetector)   // detecta idioma del navegador de forma segura
  .use(initReactI18next)
  .init({
    resources,
    // 🔒 SECURITY: idioma de respaldo si la detección falla o da un valor no soportado
    fallbackLng: "es",

    // 🔒 SECURITY: restringe qué idiomas pueden ser cargados
    supportedLngs: SUPPORTED_LNGS,
    nonExplicitSupportedLngs: false,

    keySeparator: false,

    interpolation: {
      // 🔒 SECURITY: React ya escapa los valores por defecto (JSX).
      // escapeValue: false es seguro porque i18next no insertará
      // HTML sin pasar por React, evitando doble-escape accidental.
      escapeValue: false,
    },

    // 🔒 SECURITY: evita que recursos no declarados sean cargados dinámicamente
    load: "currentOnly",

    // No exponer datos de debug en producción
    debug: false,

    detection: {
      // Solo leer de localStorage y navigator (no de querystring — evita ?lng=javascript:)
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "language",
      // 🔒 SECURITY: no escribir en cookies (reduce superficie de ataque)
      caches: ["localStorage"],
    },
  });

export default i18n;
