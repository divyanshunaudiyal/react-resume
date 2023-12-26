import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import useCursor from "../useCursor/useCursor.js";

function Navbar() {
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // const [cursorVariant, setCursorVariant] = useState("default");
  // useEffect(() => {
  //   const mouseMove = (e: MouseEvent) => {
  //     // console.log(e.clientX);
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const variants: {
  //   default: { x: number; y: number };
  //   text: {
  //     height: number;
  //     width: number;
  //     x: number;
  //     y: number;
  //     background: string;
  //     mixBlendMode: string;
  //   };
  // } = {
  //   default: {
  //     x: mousePosition.x - 8,
  //     y: mousePosition.y - 8,
  //   },
  //   text: {
  //     height: 50,
  //     width: 50,
  //     x: mousePosition.x - 25,
  //     y: mousePosition.y - 25,
  //     background: "cadetblue",
  //     mixBlendMode: "difference",
  //   },
  // };

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");
  const { mousePosition, cursorVariant, textEnter, textLeave } = useCursor();

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    text: {
      height: 50,
      width: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
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
        <h2>
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} to="/">
            Divyanshu Naudiyal
          </Link>
        </h2>
      </div>
      <ul className="links">
        <li></li>
        <li>
          {" "}
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} to="about">
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} to="project">
            Projects
          </Link>
        </li>
        <li>
          {" "}
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} to="contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="toggle" onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <button>toggle</button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
