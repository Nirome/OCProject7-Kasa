import React from 'react';

const Card = ({ housing }) => {
    return (
        <article className='card'>
            <img src={housing.cover} alt={"Image " + housing.title} />
            <p>{housing.title}</p>
        </article>
    );
};

export default Card;