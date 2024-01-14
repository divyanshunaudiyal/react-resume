function Home() {
  return (
    <div className={`home `} id="home">
      <div className="home__pic"></div>
      <div className="home__text">
        <h1>
          <span className="name">Frontend Developer</span>
        </h1>

        <p>
          Front end React developer from Dehradun, Uttarakhand. With a
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
