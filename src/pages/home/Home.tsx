// import { useEffect, useState } from "react";

function Home() {
  // const [isScrolled, setIsScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Get the bounding box of the component
  //     const boundingBox = document
  //       .getElementById("home")!
  //       .getBoundingClientRect();

  //     // Check if the component is in the viewport
  //     if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   // Add event listener for the scroll event
  //   window.addEventListener("load", handleScroll);

  //   // Remove the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("load", handleScroll);
  //   };
  // }, []);
  // const componentClass = isScrolled && "fadeIn";
  return (
    <div className={`home `} id="home">
      <div className="home__pic"></div>
      <div className="home__text">
        <h1>
          <span className="name">Frontend Developer</span>
        </h1>

        <p>
          Front end software developement from Dehradun, Uttarakhand. With a
          particular passion for design, creativity and communication.
        </p>

        <p className="language-icons">
          <img
            src="https://skillicons.dev/icons?i=js,html,css,react,sass,bootstrap,tailwind"
            alt="My Skills"
          />
        </p>
      </div>
    </div>
  );
}

export default Home;
