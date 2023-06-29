import React from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

export const Strip = () => {
  const stripText = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay:0.2
      },
      
    },
  };

  const dogVariants = {
    hidden: { x: "100%", rotate: 0 },
    show: {
      x: 0,
      rotate: 360,
      transition: { duration: 5, type: "spring", stiffness: 50 }
    },
  };

  return (
    <div className="p-12 h-[400px] bg-white flex flex-col sm:flex-row justify-evenly items-center gap-8 mt-20 sm:mt-0">
      <motion.p
        variants={stripText}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="text-primary font-heading text-[4rem]"
      >
        Bring on the Pals.
      </motion.p>

      <motion.span
        variants={dogVariants}
        viewport={{ once: false }}
        initial="hidden"
        whileInView="show"
        transition="transition"
      >
        <FontAwesomeIcon
          icon={faDog}
          className="text-[8rem] md:text-[12rem] text-primary"
        />
      </motion.span>
    </div>
  );
};
