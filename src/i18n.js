import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          aboutme: "About me",
          portfolio: "Portfolio",
          skills: "Skills",
          contact: "Contact",
        },

        aboutme: {
          aboutme: "About me",
          text: "I consider myself a programmer who works with dedication and passion in software development. I enjoy tackling technical challenges and strive to make effective decisions. I am a good collaborator and make an effort to communicate clearly and accurately. I always try to stay up-to-date with the latest trends and technologies in my field to improve my technical knowledge and apply it to my daily work.",
        },
        portfolio: {
          text: "Portfolio",
        },
        skills: {
          text: "Skills",
        },
        contact: {
          contact: "Contact",
        },
        demo: {
          demo: "View Demo",
        },

        global: {
          buttonText: "Change Language",
        },
      },
    },
    es: {
      translation: {
        navbar: {
          "about-me": "Sobre mi",
          portfolio: "Portafolio",
          skills: "Habilidades",
          contact: "Contacto",
        },
        aboutme: {
          aboutme: "Sobre mi",
          text: "Me considero un programador que trabaja con dedicación y pasión en el desarrollo de software. Disfruto enfrentar desafíos técnicos y me esfuerzo por tomar decisiones efectivas. Soy un buen colaborador y me esfuerzo por comunicarme de manera clara y precisa. Siempre intento mantenerme actualizado con las últimas tendencias y tecnologías en mi campo para mejorar mi conocimiento técnico y aplicarlo a mi trabajo diario..",
        },
        portfolio: {
          text: "Portafolio",
        },
        skills: {
          text: "Habilidades",
        },

        contact: {
          contact: "Contacto",
        },
        demo: {
          demo: "Ver Demo",
        },

        global: {
          buttonText: "Cambiar Lenguaje",
        },
      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
