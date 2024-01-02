// useCursor.js
import { useEffect, useState } from "react";

const useCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const textEnter = () => {
    setCursorVariant((prevVariant) => {
      // console.log("textEnter called");
      // console.log(prevVariant);
      return "text";
    });
  };

  const textLeave = () => {
    setCursorVariant((prevVariant) => {
      // console.log("textLeave called");
      // console.log(prevVariant);
      return "default";
    });
  };

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return { mousePosition, cursorVariant, textEnter, textLeave };
};

export default useCursor;
