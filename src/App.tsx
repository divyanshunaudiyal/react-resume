import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.tsx";
import Layout from "./Layout.jsx";
import Contact from "./pages/contact/Contact.tsx";
import About from "./pages/about/About.tsx";
import Project from "./pages/project/Project.tsx";
// import { useEffect, useState } from "react";
// import { Variants, motion } from "framer-motion";
function App() {
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
  //     background: "cadetblue",
  //     mixBlendMode: "difference",
  //   },
  // };
  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  return (
    <>
      {/* <motion.div
        className="cursor"
        variants={variants as Variants}
        animate={cursorVariant}
      ></motion.div> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
