import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ housing }) => {
    return (
        <Link to={`/housing/${housing.id}`} className='card'>
            <img src={housing.cover} alt={"Image " + housing.title} />
            <h3>{housing.title}</h3>
        </Link>
    );
};

export default Card;
