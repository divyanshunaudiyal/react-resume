import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.tsx";
import Layout from "./Layout.jsx";
import Contact from "./pages/contact/Contact.tsx";
import About from "./pages/about/About.tsx";
import Project from "./pages/project/Project.tsx";
import { useEffect, useState } from "react";
// import { Variants, motion } from "framer-motion";
// import useCursor from "./components/useCursor/useCursor.js";
function App() {
  // const { mousePosition, cursorVariant, textEnter, textLeave } = useCursor();
  // const [visible, setVisible] = useState(false); //for toggle options on button click
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
