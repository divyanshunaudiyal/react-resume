import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.tsx";
import Layout from "./Layout.tsx";
import Contact from "./pages/contact/Contact.tsx";
import About from "./pages/about/About.tsx";
import Project from "./pages/project/Project.tsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />} />
      </Route>
    </Routes>
  );
}

export default App;
