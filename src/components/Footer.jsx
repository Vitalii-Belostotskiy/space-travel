import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import rocketImg from "../img/rocket-out.png";
import "./Footer.css"

export const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, {
    margin: "0px 0px -100px 0px",
    once: true
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(100, 255, 255, 0.4)",
    },
  };

  const rocketVariants = {
    hidden: { 
      x: "100vw", 
      opacity: 0
    },
    visible: {
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 1, 
        duration: 1.5
      },
    },
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2.5 
      },
    },
  };

  return (
    <section className="footer" ref={footerRef}>
      <div className="footer-content">
        <div className="footer-text-container">
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
            className="footer-subtitle"
          >
            Are you ready to book a flight?
          </motion.p>

          <motion.button
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={buttonVariants}
            whileHover="hover"
            className="footer-button"
          >
            Book a flight
          </motion.button>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? ["visible", "float"] : "hidden"}
          variants={rocketVariants}
          className="rocket-container"
        >
          <img src={rocketImg} alt="Rocket" className="rocket-image" />
        </motion.div>
      </div>
    </section>
  );
};
