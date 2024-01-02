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
      y: mousePosition.y - 7.5, //size of cursor is 32px so to center it do -16
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
