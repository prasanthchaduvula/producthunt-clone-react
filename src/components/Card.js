import React from 'react';

export default function Card(props) {
  return (
    <div className="popular">
      <div className="popular-items">
        <img className="popularlogo" src={props.icon} alt="basecamp" />
        <div className="populartext">
          <h2>{props.title}</h2>
          <h6>{props.subtitle}</h6>
          <div className="comment-section">
            <a className="comment-button" href="">
              <img className="comment" src="comment.png" alt="comment" />
              {props.comments}
            </a>
            <a className="comment-name" href="">
              {props.tag}
            </a>
          </div>
        </div>
      </div>
      <div>
        <button className="triangle-box">
          <img className="triangle" src="triangle.png" alt="triangle" />
          <p className="triangle-no">{props.likes}</p>
        </button>
      </div>
    </div>
  );
}
