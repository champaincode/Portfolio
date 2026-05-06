import React from "react";
import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { useTranslation } from "react-i18next";

import { Link } from "react-scroll";

import AvatarImg from "../assets/avatar-animado.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const { t } = useTranslation();
  return (
    <section className="section" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-1 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          <motion.div
            id="about"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full" />
            <img
              src={AvatarImg}
              alt="Foto de perfil de Edgar Lagos, FullStack Developer"
              width={480}
              height={700}
              className="relative z-10 max-h-[700px] object-contain drop-shadow-2xl"
              /* Esta imagen está below-the-fold: lazy loading ahorra bandwidth en la carga inicial */
              loading="lazy"
              decoding="async"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 15%, black 10%, transparent 100%)",
              }}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div className="mb-2">
              <div className="section-divider !mx-0 mb-4" />
            </div>
            <h2 className="h2 text-accent">{t("text.aboutme.about")}</h2>
            <h3 className="h3 mb-4">{t("text.aboutme.tittle")}</h3>

            <p className="mb-8 text-white/70 leading-relaxed">
              {t("text.aboutme.description")}
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card p-4 px-6 text-center"
              >
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                  %
                </div>
                <div className="font-primary text-sm tracking-[2px] text-white/60">
                  {t("Responsible")}
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card p-4 px-6 text-center"
              >
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                  %
                </div>
                <div className="font-primary text-sm tracking-[2px] text-white/60">
                  {t("Dedicated")}
                </div>
              </motion.div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link activeClass="active" smooth={true} spy={true} to="contact">
                <button className="btn btn-lg relative z-10">
                  <span>{t("contact")}</span>
                </button>
              </Link>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                to="work"
                className="text-gradient btn-link cursor-pointer"
              >
                {t("text.porfolio")}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
