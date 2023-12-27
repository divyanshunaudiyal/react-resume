import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import useCursor from "../useCursor/useCursor";
function Navbar() {
  const { mousePosition, cursorVariant, textEnter, textLeave } = useCursor();

  const variants = {
    default: {
      x: mousePosition.x - 9,
      y: mousePosition.y - 9, //size of cursor is 32px so to center it do -16
    },
    text: {
      height: 50,
      width: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25, // size 50 , so -25
      background: "cadetblue",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.nav className="navbar-container">
      <motion.div
        className="cursor"
        variants={variants as Variants}
        animate={cursorVariant}
      ></motion.div>
      <div className="logo">
        <Link to="/">
          <h2 onMouseEnter={textEnter} onMouseLeave={textLeave}>
            Divyanshu Naudiyal
          </h2>
        </Link>
      </div>
      <ul className="links">
        <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
          {" "}
          <Link to="about">About</Link>
        </li>
        <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
          {" "}
          <Link to="project">Projects</Link>
        </li>
        <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
          {" "}
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <div className="toggle">
        <button>toggle</button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
