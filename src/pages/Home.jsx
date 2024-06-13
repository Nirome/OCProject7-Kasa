import React from 'react';
import Header from "../components/Header"
import Banner from "../components/Banner"
import Gallery from '../components/Gallery';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Gallery />           
        </div>
    );
};

export default Home;