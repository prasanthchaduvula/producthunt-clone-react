import React from 'react';

export default function Right() {
  return (
    <div className="right">
      <h3>Makers working today</h3>
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
        <h3>Product Hunt Radio</h3>
        <div className="radio-div">
          <p className="radio-text">
            The future of seed stage VC with Tigs Savage
          </p>
          <img className="radio-img" src="radio.gif" alt="makers" />
        </div>
      </div>
      <h3>Newsletter</h3>
      <div className="newsletter">
        <div className="newsletter-img-div">
          <img className="newsletter-img" src="newsletter.gif" alt="makers" />
          <p className="newsletter-img-text">
            Upgrade your home office with...
          </p>
        </div>
        <p className="newsletter-text">
          Get the best new products in your inbox, every day 👇
        </p>
        <input
          className="newsletter-search"
          type="text"
          name=""
          placeholder="Your email"
        />
        <button className="newsletter-subscribe">SUBSCRIBE</button>
      </div>
    </div>
  );
}
