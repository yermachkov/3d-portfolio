import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Front-end developer with experience in JavaScript, React, and
        TypeScript on both team and individual projects. As a frontend developer
        I am passionate about creating engaging and user-friendly web
        experiences. I have a strong attention to detail and a desire to write
        clean, maintainable code. I am ready for challenges and contributing to
        projects that have a positive impact.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
