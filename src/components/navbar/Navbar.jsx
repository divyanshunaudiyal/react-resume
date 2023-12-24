import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  useEffect(() => {
    const mouseMove = (e) => {
      // console.log(e.clientX);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mouseMove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10, //-16 to center the dot because we set the width and height to 32px so half of it
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
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <motion.nav className="navbar-container">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      <div className="logo">
        <h2 onMouseEnter={textEnter} onMouseLeave={textLeave}>
          Divyanshu Naudiyal
        </h2>
      </div>
      <ul className="links">
        <li>
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} to="/">
            Home
          </Link>
        </li>
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
