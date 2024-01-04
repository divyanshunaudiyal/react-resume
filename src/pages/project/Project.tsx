import { useEffect, useState } from "react";

function Project() {
  const [isProjectScrolled, setIsProjectScrolled] = useState(false);
  useEffect(() => {
    const handleProjectScroll = () => {
      const boundingBox = document
        .querySelector(".project-container__project2")!
        .getBoundingClientRect();

      if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
        setIsProjectScrolled(true);
      } else {
        setIsProjectScrolled(false);
      }
    };

    window.addEventListener("scroll", handleProjectScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleProjectScroll);
    };
  }, []);
  return (
    <section className="project">
      <div className="project-container">
        <h1 className="project-heading">Projects.</h1>
        <div className="project-container__project1">
          <div className="project-text">
            <h1>Rent-a-car App</h1>
            <div className="languages">
              <div className="project-lang">React</div>
              <div className="project-lang">SASS</div>
            </div>
          </div>
          <div className="project-img">
            <img src="/carrent-image.jpg" alt="rent-a-car image" />
          </div>
        </div>
        <div
          className={`project-container__project2 ${
            isProjectScrolled ? "fadeIn" : " "
          }`}
        >
          <div className={`project-text `}>
            <h1>Find your recipe</h1>
            <div className="languages">
              <div className="project-lang">HTML</div>
              <div className="project-lang">SASS</div>
              <div className="project-lang">JavaScript</div>
            </div>
          </div>
          <div className="project-img">
            <video controls autoPlay>
              <source src="/recipe.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
