import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import AppNav from "../components/AppNav";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <AppNav />
      <div className='layout-container'>
        <div className='column-list'>
          <div className='columns'>
            <div className='info-box float-right slide-left'></div>
            <div className='small-circle float-right slide-left'></div>
          </div>
          <div className='columns'>
            <div className='info-icons slide-left'>
              <i class='fal fa-home-lg'></i> : Saratoga Springs, UT
              <br />
              <br />
              <i class='fal fa-user-hard-hat'></i> : Adobe
              <br />
              <br />
              <i class='fal fa-phone'></i> : 385-225-2263
              <br />
              <br />
              <i class='fal fa-paper-plane'></i> : steven@stevencreates.tech
            </div>
          </div>
          <div className='columns'></div>
          <div className='columns'></div>
        </div>
        <div className='column-list'>
          <div className='columns'></div>
          <div className='columns'></div>
          <div className='columns'>
            <p className='skills-text slide-right'>
              Software Developer with 5+ years of hands-on experience designing,
              developing, and implementing technical solutions for enterprise
              technology companies. Motivated Self-starter with a passion for
              full-stack web development focused on building innovative web
              applications and platforms from concept to production.
            </p>
          </div>
          <div className='columns'>
            <div className='info-box float-left slide-right'></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
