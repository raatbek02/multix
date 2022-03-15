import React from "react";
import { Bounce, Fade } from "react-reveal";
import Flash from "react-reveal/Flash";

import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { ABOUT } from "../../../utils/consts";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="title__white">
          <Fade duration={2000}>WE WORK FOR YOUR SUCCESS IN REAL</Fade>
        </div>

        <div className="banner__description">
          <Fade duration={2000}>
            “Successful people are not gifted they just work hard, then succeed
            on purpose.”
          </Fade>
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
            <Flash duration={2000}>
              <button>Contact Us</button>
            </Flash>
          </LinkScroll>
          <Link to={ABOUT}>
            <Flash duration={2000}>
              <button>Read more</button>
            </Flash>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
