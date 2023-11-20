import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/divyanshunaudiyal"
        );
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="home__text">
        <h1>
          Frontend <span>React</span> Developer
        </h1>
        <p>{data && data.bio}</p>
        <p>
          <img
            src="https://skillicons.dev/icons?i=js,html,css,react,sass,bootstrap,tailwind"
            alt="My Skills"
          />
        </p>
      </div>
      <div className="home__pic"></div>
    </div>
  );
}

export default Home;
