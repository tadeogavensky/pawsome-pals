import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/images/logo.png";
import { useState } from "react";
export const Navbar = () => {
  const [menu, isOpen] = useState(false);

  const container = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
    
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4, // Adjust the duration for the text animation
        ease: "easeOut", // Use an easing function for smoother motion
      },
    },
  };

  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      className=" p-4 bg-primary text-white"
    >
      <div className=" gap-4 justify-evenly sm:flex items-center hidden">
        <img src={logo} className="w-16 h-16 object-contain" alt="" />
        <ul className="flex items-center gap-8">
          <motion.li
            variants={item}
            className="text-2xl font-bold font-heading hover:text-secondary transition-all duration-200 ease-in-out"
          >
            <Link>Home</Link>
          </motion.li>
          <motion.li
            variants={item}
            className="text-2xl font-bold font-heading hover:text-secondary transition-all duration-200 ease-in-out"
          >
            <Link>Explore</Link>
          </motion.li>
          <motion.li
            variants={item}
            className="text-2xl font-bold font-heading hover:text-secondary transition-all duration-200 ease-in-out"
          >
            <Link>About</Link>
          </motion.li>
          <motion.li
            variants={item}
            className="text-2xl font-bold font-heading hover:text-secondary transition-all duration-200 ease-in-out"
          >
            <Link>Contact</Link>
          </motion.li>
        </ul>
        <motion.button className="uppercase bg-secondary hover:bg-[#D76F05] transition-all duration-150 ease-in-out py-4 text-white rounded-full p-3 tracking-wider font-bold">
          Join the pawtrol now
        </motion.button>
      </div>
      {/* 
      <div className=" justify-between sm:hidden items-center flex relative">
        <button
          onClick={() => {
            isOpen(!menu);
          }}
        >
          <FontAwesomeIcon
            className="text-3xl"
            icon={!menu ? faBars : faXmark}
          />
        </button>

        <img src={logo} className="w-16 h-16 object-contain" alt="" />

        <span></span>
      </div>

      {open && <SideBar item={item} />} */}
    </motion.nav>
  );
};

const SideBar = ({ item }) => {
  return (
    <motion.div className="max-w-3xl bg-white absolute">
      <ul className="flex  flex-col items-center gap-8">
        <motion.li className="text-2xl font-bold font-heading hover:text-secondary transition-all duration-200 ease-in-out">
          <Link>Home</Link>
        </motion.li>
        <motion.li className="text-2xl font-bold font-heading hover:text-secondary transition-all duration-200 ease-in-out">
          <Link>Explore</Link>
        </motion.li>
        <motion.li className="text-2xl font-bold font-heading hover:text-secondary transition-all duration-200 ease-in-out">
          <Link>About</Link>
        </motion.li>
        <motion.li className="text-2xl font-bold font-heading hover:text-secondary transition-all duration-200 ease-in-out">
          <Link>Contact</Link>
        </motion.li>
      </ul>
    </motion.div>
  );
};
