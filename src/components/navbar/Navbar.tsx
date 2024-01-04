import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import useCursor from "../useCursor/useCursor";
import { useState } from "react";
function Navbar() {
  const { mousePosition, cursorVariant, textEnter, textLeave } = useCursor();
  const [visible, setVisible] = useState(false); //for toggle options on button click
  const variants = {
    default: {
      x: mousePosition.x - 7.5,
      y: mousePosition.y - 7.5,
      // transition: { delay: -0.5 },
    },
    text: {
      height: 70,
      width: 70,
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      background: "cadetblue",
      mixBlendMode: "difference",
      // transition: { type: "spring", stiffness: 1000, damping: 100 },
    },
  };

  return (
    <motion.nav className="navbar">
      <div className="navbar-container">
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
            <Link to="about">about</Link>
          </li>
          <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
            {" "}
            <Link to="project">projects</Link>
          </li>
          <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
            {" "}
            <Link to="contact">contact</Link>
          </li>
        </ul>
        <button
          className="toggle-btn"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          onClick={() => setVisible(!visible)}
        >
          menu
        </button>
        <div className={`toggle-container ${visible ? "show" : "hidden"}`}>
          {/* <div className="toggle-list"> */}
          <ul className="toggle-ul">
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              {" "}
              <Link to="about" onClick={() => setVisible(!visible)}>
                about
              </Link>
            </li>
            <li
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              onClick={() => setVisible(!visible)}
            >
              {" "}
              <Link to="project">projects</Link>
            </li>
            <li
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              onClick={() => setVisible(!visible)}
            >
              {" "}
              <Link to="contact">contact</Link>
            </li>
          </ul>

          {/* </div> */}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
