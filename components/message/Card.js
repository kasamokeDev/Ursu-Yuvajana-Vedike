/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Card() {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body text-center">
          <p className="card-text text-center">
            <i>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </i>
          </p>
          <img
            className="w-20 h-20 card-img-top rounded"
            src="/assets/images/aboutImage1.jpg"
            alt="Card image cap"
            style={{ width: '10rem', height: '10rem' }}
          />
          <h5 className="card-title text-center pt-2">
            A P Geroge, <strong>1959-2019</strong>
          </h5>
        </div>
      </div>
    </>
  );
}

export default Card;
