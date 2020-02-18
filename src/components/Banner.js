import React, { useEffect, useState } from "react";
import "./Style/Banner.css";

function Banner() {
  const [repos, setRepos] = useState("");

  async function fuckthiss() {
    const url = "https://api.github.com/users/tecdef";
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setRepos(result);
  }

  useEffect(() => {
    fuckthiss();
  }, []);

  return (
    <div className='layout-container'>
      <div className='banner-background'>
        <div className='circle-image'></div>
        <div className='about-stats'>
          <div>GitHub Repos: {repos.public_repos}</div>
          <div>Some Stat:</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
