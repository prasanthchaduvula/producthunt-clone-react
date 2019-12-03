import React from 'react';

export default function Right() {
  return (
    <div className="right">
      <h1>Makers working today</h1>
      <div className="right-section">
        <div className="maker-logos-section">
          {[1, 2, 3, 4, 5, 6].map((elm, i) => (
            <img
              className="makers-logos"
              src={`${i + 1}dp.jpeg`}
              alt="makers"
            />
          ))}

          <br></br>
          {[1, 2, 3, 4, 5, 6].map((elm, i) => (
            <img
              className="makers-logos"
              src={`${i + 6}dp.jpeg`}
              alt="makers"
            />
          ))}
        </div>

        <br></br>
        <a className="jointag" href="">
          JOIN THEM ON MAKER
        </a>
      </div>
      <div className="producthunt-radio">
        <h1>Product Hunt Radio</h1>
        <div className="radio-div">
          <p className="radio-text">
            The future of seed stage VC with Tigs Savage
          </p>
          <img className="radio-img" src="radio.gif" alt="makers" />
        </div>
      </div>
    </div>
  );
}
