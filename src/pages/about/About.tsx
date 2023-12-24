import { useEffect, useState } from "react";

function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Get the bounding box of the component
      const boundingBox = document
        .getElementById("about")!
        .getBoundingClientRect();

      // Check if the component is in the viewport
      if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for the scroll event
    window.addEventListener("load", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("load", handleScroll);
    };
  }, []);
  const componentClass = isScrolled && "leftToRight";
  return (
    <section>
      <div className={`about ${componentClass}`} id="about">
        <div className="about__img">
          <img src="bg-laptop.jpg" alt="" />
          <span>
            <img src="frontend.svg" alt="bb" />
          </span>
        </div>
        <div className="about__text">
          <h3>
            A dedicated Front-end Developer based in Dehradun,Uttarakhand,India
            📍
          </h3>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
