import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="nav-menu">
          <div>
            <a href="index.js">
              <img
                className="producthuntLogo"
                src="producthuntlogo.png"
                alt="producthuntlogo"
              />
            </a>
          </div>
          <div className="searchbox">
            <img className="searchicon" src="search.png" alt="search" />
            <input
              className="searchinput"
              type="text"
              name=""
              placeholder="Discover your next favorite thing..."
            />
          </div>
          <div className="navtags-div">
            {['Deals', 'Jobs', 'Makers', 'Radio', 'Ship', '...'].map(menu => (
              <a className="navtags" href="">
                {menu}
              </a>
            ))}
          </div>
          <div className="nav-buttons">
            <button className="logo">LOG IN</button>
            <button className="signup">SIGN UP</button>
          </div>
        </div>
      </div>
    </header>
  );
}
