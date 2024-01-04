import { useEffect, useState } from "react";

function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const boundingBox = document
        .querySelector(".about_extra-curriculur")!
        .getBoundingClientRect();

      if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
        // const extra = document.querySelector(".extra");
        // if (extra) {
        //   extra.classList.add("slideToTop");
        // }

        setIsScrolled(true);
      } else {
        // const extra = document.querySelector(".extra");
        // if (extra) {
        //   extra.classList.remove("slideToTop");
        // }

        setIsScrolled(false);
      }
    };

    // Add event listener for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about">
      <h1>Who's this?</h1>
      <div className="about_technical">
        <div className="image">
          <img src="../../public/1.jpeg" alt="" />
        </div>
        <div className="details">
          <h2>Namaste 🙏🏻</h2>
          <p>
            I'm Divyanshu Naudiyal, a passionate React developer with a solid
            foundation in HTML, CSS, JavaScript, Sass, Bootstrap, and React.
            Holding a degree in Computer Science from Graphic Era University,
            I've embarked on a journey to craft engaging and immersive web
            experiences.
          </p>
          <p>
            {" "}
            I strive to create visually compelling digital experiences. Each
            line of code is an opportunity to bring a unique vision to life,
            weaving together aesthetics and functionality seamlessly.{" "}
          </p>
        </div>
      </div>
      <div
        className={`about_extra-curriculur ${isScrolled ? "slideToTop" : ""}`}
      >
        <p>
          Apart from crafting code, I'm deeply passionate about Mixed Martial
          Arts. As a coach in a local gym, I guide aspiring fighters. Beyond the
          digital realm, I thrive on high-altitude hikes, coffee, and
          exploration—an adventurous balance to my tech-centric world.
        </p>
      </div>
    </section>
  );
}

export default About;
