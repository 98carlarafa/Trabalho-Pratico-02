import React from 'react';
import './index.css';

const Card = ({ source }) => {
  return (
    <>
      <div className="card">
        <img src={source} alt="randomImage" />
      </div>
    </>
  );
};

export default Card;
