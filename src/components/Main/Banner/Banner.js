import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { ABOUT } from "../../../utils/consts";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="title__white">WE WORK FOR YOUR SUCCESS IN REAL</div>
        <div className="banner__description">
          “Successful people are not gifted they just work hard, then succeed on
          purpose.”
        </div>
        <div className="banner__btns">
          <LinkScroll
            activeClass="active"
            to="footer__form"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={200}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >
            <button>Contact Us</button>
          </LinkScroll>
          <Link to={ABOUT}>
            <button>Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
