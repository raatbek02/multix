import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="title__white">WE WORK FOR YOUR SUCCESS IN REAL</div>
        <div className="banner__description">
          “Successful people are not gifted they just work hard, then succeed
          on purpose.”
        </div>
        <div className="banner__btns">
          <button>Contact Us</button>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
