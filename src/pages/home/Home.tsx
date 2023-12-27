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
          <span>Frontend Developer</span>
        </h1>

        <p>
          I spend my days (and often nights) painting the Internet canvas with
          PROJECTS and lines of code, turning zeroes and ones into immersive,
          interactive experiences. I tread the path of minimalism, finding
          beauty in simplicity and order. When I'm not crafting beautiful web
          experiences, you can find me doing MMA,teaching kids how to fight .
          anyways you can CONTACT ME
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
