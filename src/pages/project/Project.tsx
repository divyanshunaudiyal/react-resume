function Project() {
  return (
    <section className="project">
      <div className="project-container">
        {/* <div className="project-container__heading">
          <h1>Some of the my projects</h1>
        </div> */}
        <h1>
          Some of my <span>recent projects</span>
        </h1>
        <div className="project-container__project1">
          <div className="project-img">
            <img src="/carrent-image.jpg" alt="rent-a-car image" />
          </div>
          <div className="project-info">
            <h1>Rent-a-car App</h1>
            <p>
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
          </div>
        </div>
        <div className="project-container__project2">
          <div className="project-info">
            <h1>Recipe App</h1>
            <p>
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
          </div>
          <div className="project-img">
            <video width="640" height="360" controls autoPlay>
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
