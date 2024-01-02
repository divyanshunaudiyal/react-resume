import { useState } from "react";

function Project() {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovered(false);
  // };

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
          {/* <div className="project-info">
            <p>
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
          </div> */}
        </div>
        <div className="project-container__project2">
          {/* <div className="project-info">
            <h1>Recipe App</h1>
            <p>
              Our recipe app is your go-to platform for effortless recipe
              exploration. Easily search and discover a diverse array of dishes
              tailored to your taste. Happy cooking!
            </p>
          </div> */}
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
