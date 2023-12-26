import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.tsx";
import Layout from "./Layout.jsx";
import Contact from "./pages/contact/Contact.tsx";
import About from "./pages/about/About.tsx";
import Project from "./pages/project/Project.tsx";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
function App() {
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // const [cursorVariant, setCursorVariant] = useState("default");
  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     // console.log(e.clientX);
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mouseMove", mouseMove);
  //   };
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16, //-16 to center the dot because we set the width and height to 32px so half of it
  //   },
  //   text: {
  //     height: 150,
  //     width: 150,
  //     x: mousePosition.x - 75,
  //     y: mousePosition.y - 75,
  //     background: "wheat",
  //     mixBlendMode: "difference",
  //   },
  // };
  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  return (
    <>
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
