import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
          <Header />
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/">  
            <h3>Retourner sur la page d'accueil</h3>
          </Link> 
          <Footer />
        </div>
    );
};

export default NotFound;