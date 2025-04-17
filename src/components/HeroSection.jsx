import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import rocketImg from "../img/rocket.png";
import "./HeroSection.css";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleAboutSectionClick = () => {
    const aboutSection = document.getElementById("about-section")
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const heroSection = document.querySelector(".hero");
      const heroHeight = heroSection.offsetHeight;

      // We update scrollY only if we are within the hero section
      if (window.scrollY < heroHeight) {
        setScrollY(window.scrollY);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(100, 255, 255, 0.4)",
    },
  };

  const starVariants = {
    twinkle: {
      opacity: [0.2, 0.8, 0.2],
      transition: {
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const rocketVariants = {
    initial: { x: isMobile ? -50 : -100, y: 100, opacity: 0 },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.9,
        ease: "easeOut",
      },
    },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Create stars for bg
  const stars = Array.from({ length: 30 }).map((_, i) => {
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${1 + Math.random() * 2}px`,
      height: `${1 + Math.random() * 2}px`,
    };

    return (
      <motion.div
        key={i}
        className="star"
        style={style}
        variants={starVariants}
        animate="twinkle"
      />
    );
  });

  return (
    <section className="hero">
      <div className="stars-container">{stars}</div>

      <div className="hero-content">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="hero-title"
        >
          Open up cosmic horizons
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
          className="hero-subtitle"
        >
          First commercial flights to <span className="highlight">Mars</span>,{" "}
          <span className="highlight">Jupiter</span> &{" "}
          <span className="highlight">Saturn</span>
        </motion.p>

        <motion.button
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          whileHover="hover"
          className="hero-button"
          onClick={handleAboutSectionClick}
        >
          About travels
        </motion.button>
      </div>

      <motion.div
        initial="initial"
        animate={["animate", "float"]}
        variants={rocketVariants}
        className="rocket"
        style={{
          transform: `translateY(${-scrollY * 0.3}px)`,
        }}
      >
        <img src={rocketImg} alt="Rocket" />
      </motion.div>
    </section>
  );
};
