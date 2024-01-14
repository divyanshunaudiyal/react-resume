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
      <h1>Who's Divyanshu?</h1>
      <div className="about_technical">
        <div className="image">
          <img src="../../public/1.jpeg" alt="" />
        </div>
        <div className="details">
          <h2>Namaste 🙏🏻</h2>
          <p>
            I'm Divyanshu Naudiyal, a passionate React developer with a solid
            foundation in HTML, CSS, JavaScript, Sass, Bootstrap, and React.
          </p>
          <p>
            {" "}
            I love how the web can connect with people, this inspires me to
            become better and continue learning so that I can make an impact.
          </p>
        </div>
      </div>
      <div
        className={`about_extra-curriculur ${isScrolled ? "slideToTop" : ""}`}
      >
        <p>
          Apart from crafting code, I'm deeply passionate about Mixed Martial
          Arts. As a coach in a local gym, I guide aspiring fighters. And I love
          high-altitude hikes, coffee, and exploration—an adventurous balance to
          my tech-centric world.
        </p>
      </div>
    </section>
  );
}

export default About;
