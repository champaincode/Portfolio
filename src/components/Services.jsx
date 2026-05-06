import React from "react";
// icons
import {
  FaRobot,
  FaCode,
  FaWordpress,
  FaDatabase,
  FaCashRegister,
  FaTools,
  FaLanguage,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Services = () => {
  const { t } = useTranslation();

  const skills = [
    {
      name: t("skill.ai.title"),
      description: t("skill.ai.desc"),
      icon: <FaRobot />,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: t("skill.frontend.title"),
      description: t("skill.frontend.desc"),
      icon: <FaCode />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: t("skill.wordpress.title"),
      description: t("skill.wordpress.desc"),
      icon: <FaWordpress />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: t("skill.backend.title"),
      description: t("skill.backend.desc"),
      icon: <FaDatabase />,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: t("skill.pos.title"),
      description: t("skill.pos.desc"),
      icon: <FaCashRegister />,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: t("skill.tools.title"),
      description: t("skill.tools.desc"),
      icon: <FaTools />,
      color: "from-rose-500 to-red-500",
    },
    {
      name: t("skill.lang.title"),
      description: t("skill.lang.desc"),
      icon: <FaLanguage />,
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-12">
          {/* Header */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center lg:text-left mb-6 lg:mb-0"
          >
            <div className="section-divider lg:!mx-0 mb-6" />
            <h2 className="h2 text-accent mb-4">{t("skills.title")}</h2>
            <h3 className="h3 max-w-[455px] mb-6 mx-auto lg:mx-0">
              {t("skills.subtitle")}
            </h3>
            <p className="max-w-[700px] text-[18px] mx-auto lg:mx-0 leading-relaxed text-white/60">
              {t("skills.description")}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              return (
                <motion.div
                  variants={fadeIn("up", 0.15 * (index + 1))}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                  key={index}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="glass-card gradient-border p-7 min-h-[200px] flex flex-col group cursor-default"
                >
                  <div className="flex items-center gap-x-4 mb-5">
                    <div
                      aria-hidden="true"
                      className={`text-[26px] text-white p-3 rounded-xl bg-gradient-to-br ${skill.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="text-[20px] font-bold font-primary leading-tight">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="font-secondary text-[15px] leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
