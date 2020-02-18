import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import AppNav from "../components/AppNav";
import Footer from "../components/Footer";
import Feed from "rss-to-json";
import "./Style/Stats.css";

function Stats() {
  const [medium, setMedium] = useState([]);

  useEffect(() => {
    Feed.load(
      "https://cors-anywhere.herokuapp.com/https://medium.com/feed/@steven_creates",
      function(err, rss) {
        console.log(rss.items);
        setMedium(rss.items);
      }
    );
  }, []);

  return (
    <>
      <Nav />
      <Banner />
      <AppNav />
      <div className='layout-container'>
        <div className='column-list'>
          <div className='columns medium-container'>
            <p className='stat-titles'>Medium Articles</p>
            {medium.map(medium => (
              <div className='medium-post'>
                <p className='medium-title'>{medium.title}</p>
                <p className='publish-date'>Published: {medium.pubDate}</p>
                <div className='link-container'>
                  <a class='medium-link' href={medium.link}>
                    See Article
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className='columns'>
            <p className='stat-titles'>GitHub Commits</p>
            <img
              className='commit-img'
              src='http://ghchart.rshah.org/ee7175/tecdef'
              alt='steven creates github chart'
            />
          </div>
        </div>
        <div className='column-list'>
          <div className='columns'>1</div>
          <div className='columns'>2</div>
          <div className='columns'>3</div>
        </div>
        <div className='column-list'>
          <div className='columns'>1</div>
          <div className='columns'>2</div>
          <div className='columns'>3</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Stats;
