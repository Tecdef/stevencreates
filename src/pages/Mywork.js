import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import AppNav from "../components/AppNav";
import Footer from "../components/Footer";
import "./Style/Mywork.css";

export default function Mywork() {
  const [repos, setRepos] = useState([]);

  async function fuckthiss() {
    const url = "https://api.github.com/users/Tecdef/repos";
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setRepos(result);
  }

  useEffect(() => {
    fuckthiss();
  }, []);
  return (
    <>
      <Nav />
      <Banner />
      <AppNav />
      <div className='layout-container'>
        <div className='column-list'>
          <div className='columns stat-titles'>Projects</div>
        </div>
        {/* <div className='column-list'>
          <div className='columns'>1</div>
          <div className='columns bankan-image'></div>
        </div> */}
        <div className='column-list'>
          <div className='columns current-repos'>
            {repos.map(repo => (
              <div className='repo-container' key={repo.name}>
                <div className='repo-name'>{repo.name}</div>
                <a
                  className='link-repo'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={repo.html_url}>
                  Github
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
