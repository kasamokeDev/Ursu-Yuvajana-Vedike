/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Card({ img ='', title, description }) {
  return (
    <div
      className="card shadow-lg p-3 mb-5 bg-white rounded"
      style={{ width: '18rem' }}
    >
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title" style={{ textAlign: 'center' }}>
          {title}
        </h5>
        <p className="card-text" style={{ textAlign: 'center' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
