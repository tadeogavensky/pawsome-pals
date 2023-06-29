import { motion } from "framer-motion";
import React from "react";
import hero from "../assets/images/hero.jpg";
export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Adjust the duration for the text animation
        ease: "easeOut", // Use an easing function for smoother motion
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1, // Adjust the duration for the button animation
        ease: "easeInOut", // Use an easing function for smoother motion
      },
    },
  };

  const imgVariants = {
    hidden: { opacity: 0, x: 500 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.4,
      },
    },
  };

  const imgItem = {
    hidden: { x: 500 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:mt-20 gap-60 lg:gap-8"
    >
      <div className="flex flex-col max-w-full lg:max-w-xl gap-8">
        <motion.p variants={item} className="font-heading text-6xl text-white">
          Serve your buddies with
          <motion.p variants={item} className="text-secondary">
            Pawsome Pals
          </motion.p>
        </motion.p>

        <motion.p
          variants={item}
          className="font-body text-white font-normal text-[1.4rem]"
        >
          At Pawsome Pals, we bring you an extraordinary array of delights for
          your furry friend. From tail-wagging treats to stylish comfort, our
          diverse range of products will bring joy and excitement to your
          beloved pet's life.
        </motion.p>

        <motion.button
          variants={buttonVariants}
          className="lg:max-w-sm uppercase bg-secondary hover:bg-[#D76F05] transition-all duration-150 ease-in-out py-4 text-white rounded-full p-3 tracking-wider font-bold"
        >
          Join the pawtrol now
        </motion.button>
      </div>
      <motion.div
        variants={imgVariants}
        initial="hidden"
        whileInView="show"
        className="w-[70%] lg:w-[40%] hidden sm:block  relative"
      >
        <motion.img
          variants={imgItem}
          src={hero}
          alt="hero"
          style={{ zIndex: 2 }}
        />

        <motion.div
          variants={imgItem}
          className="relative hidden md:block bg-secondary z-0 bottom-[18rem] left-[30%] h-full md:h-[350px] lg:h-[400px] w-[400px]"
          style={{ zIndex: -1 }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};
