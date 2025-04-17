import React from "react";
import { motion } from "framer-motion";
import { usePlanets } from "../Planets/Planets";
import "./AboutSection.css";

export const AboutSection = () => {
  const { planets } = usePlanets();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const planetVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="about-section" id="about-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          About our space travels
        </motion.h2>

        <motion.div
          className="planets-container"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          {planets.map((planet) => (
            <div key={planet.id} className="planet-item" ref={planet.ref}>
              <motion.div
                className="planet-image"
                variants={planetVariants}
                animate={planet.inView ? "visible" : "hidden"}
              >
                <img src={planet.img} alt={planet.name} />
              </motion.div>

              <motion.div
                className="planet-info"
                variants={textVariants}
                animate={planet.inView ? "visible" : "hidden"}
              >
                <h3>{planet.name}</h3>
                <p>{planet.description}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
