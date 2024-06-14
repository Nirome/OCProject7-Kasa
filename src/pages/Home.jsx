import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
        <div className="home">
            <Header />
            <Banner />
            <Gallery />
        </div>
        <Footer />
    </div>
  );
};

export default Home;
