import { useEffect, useState } from "react";

function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOutOfView, setIsOutOfView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const boundingBox = document
        .querySelector(".about-images")!
        .getBoundingClientRect();

      if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
        const extra = document.querySelector(".extra");
        if (extra) {
          extra.classList.add("fadeIn");
          extra.classList.remove("slideToTop");
        }

        setIsScrolled(true);
        setIsOutOfView(false);
      } else {
        const extra = document.querySelector(".extra");
        if (extra) {
          extra.classList.remove("fadeIn");
          extra.classList.add("slideToTop");
        }

        setIsScrolled(false);
        setIsOutOfView(true);
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
    <section className="about-container">
      <div className="about">
        <div className="about-text">
          <h1 className="about-heading">Who's this?</h1>
          <div className="about-details">
            <p className="about-para">
              I spend my days (and often nights) painting the Internet canvas
              with PROJECTS and lines of code, turning zeroes and ones into
              immersive, interactive experiences. I tread the path of
              minimalism, finding beauty in simplicity and order. When I'm not
              crafting beautiful web experiences, you can find me doing
              MMA,teaching kids how to fight . anyways you can CONTACT ME. I
              provide custom designs at affordable prices. Frequently your
              website is the first impression your customers will get, so make
              sure it’s a good one, feel free to reach out and say hello! I
              promise I don't bite 😉
            </p>
            <div className="academics">
              <div className="education">
                <h1>EDUCATION</h1>
                <p>
                  <span>Graphic Era Deemed To Be University</span>
                  <span>Btech Cs </span>
                  <span>2017-2021</span>
                  <span>Dehradun</span>
                </p>
              </div>
              <div className="skills">
                <h1>SKILLS</h1>
                <p>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>ReactJs</span>
                  <span>SASS</span>
                  <span>Bootstrap</span>
                  <span>Responsive Design</span>
                </p>
              </div>
            </div>
          </div>

          <h3 className="resume">
            click here to download <a href="">resume</a>
          </h3>
        </div>

        <div className={` extra ${isScrolled ? "visible" : ""}`}>
          <h2 className="other-than-work">
            When not working , you'll find me hopping cafes, training MMA and
            teaching to fight or in the mountains. trails.
          </h2>
          <div className="about-images">
            <img src="./danda.jpeg" alt="" />
            <img src="./cafe.jpeg" alt="" />
            <img src="./cafe.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
