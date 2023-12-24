import Navbar from "./components/navbar/Navbar.tsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.tsx";
function Layout({ textEnter, textLeave }) {
  return (
    <>
      <Navbar onMouseEnter={textEnter} onMouseLeave={textLeave} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
