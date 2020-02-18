import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import AppNav from "../components/AppNav";
import Footer from "../components/Footer";

export default function Mywork() {
  return (
    <>
      <Nav />
      <Banner />
      <AppNav />
      <div className='column-list'>
        <div className='columns'>1</div>
        <div className='columns'>2</div>
      </div>
      <Footer />
    </>
  );
}
