/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Card({ img, title, description }) {
  return (
    <div
      class="card shadow-lg p-3 mb-5 bg-white rounded"
      style={{ width: '18rem' }}
    >
      <img class="card-img-top" src={img} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: 'center' }}>
          {title}
        </h5>
        <p class="card-text" style={{ textAlign: 'center' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
