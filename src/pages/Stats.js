import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import AppNav from "../components/AppNav";
import Footer from "../components/Footer";

function Stats() {
  return (
    <>
      <Nav />
      <Banner />
      <AppNav />
      <div className='layout-container'>
        hello
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
