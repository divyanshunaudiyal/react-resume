// import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import useCursor from "../useCursor/useCursor";
function Footer() {
  const { mousePosition, cursorVariant, textEnter, textLeave } = useCursor();
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // }); //set mouseposition to 0,0 position
  // const [cursorVariant, setCursorVariant] = useState("default"); // cursor to default,when hovering will be changed to text
  // useEffect(() => {
  //   const mouseMove = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //     // set mouseposition to current position
  //   };

  //   window.addEventListener("mousemove", mouseMove);
  //   // on mouse move call mouseMove function to set positon of cursor

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 9,
  //     y: mousePosition.y - 9, //size of cursor is 32px so to center it do -16
  //   },
  //   text: {
  //     height: 50,
  //     width: 50,
  //     x: mousePosition.x - 25,
  //     y: mousePosition.y - 25, // size 50 , so -25
  //     background: "green",
  //     mixBlendMode: "difference",
  //   },
  // };
  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  return (
    <motion.footer>
      <div className="footer-container">
        <div className="copyright">
          <p>Copyright &copy; 2023 DN</p>
        </div>
        <div className="social-profiles">
          <a
            href="https://www.linkedin.com/in/divyanshunaudiyal/"
            target="_blank"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-brand-linkedin"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </a>
          <a
            href="https://github.com/divyanshunaudiyal"
            target="_blank"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-brand-github"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
