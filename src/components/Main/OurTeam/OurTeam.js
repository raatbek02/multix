import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Animated } from "react-animated-css";

import { TEAMDETAIL } from "../../../utils/consts";

import "./OurTeam.css";
import { Zoom } from "react-reveal";

function OurTeam() {
  const navigate = useNavigate();
  const teamData = useSelector((s) => s.team_store.teamData);
  let teamMain = teamData.slice(0, 3);

  return (
    <div className="ourTeam">
      <div className="ourTeam__container">
        <Zoom top>
          <div className="title__blue">OUR TEAM</div>
        </Zoom>
        <Zoom bottom>
          <div className="ourTeam__subtitle">
            We have some special crieteria that will help you
          </div>
        </Zoom>

        <div className="ourTeam__content">
          {teamMain &&
            teamMain.map((el) => (
              <Zoom cascade>
                <div
                  className="ourTeam__item"
                  onClick={() => navigate(`${TEAMDETAIL}/${el.id}`)}
                >
                  <div className="ourTeam__name">{el.title}</div>
                  <div className="ourTeam__position">{el.position}</div>
                  <div className="ourTeam__bg">
                    <img src={el.image} alt="" />
                  </div>
                </div>
              </Zoom>
            ))}
        </div>
        <div className="ourTeam__bottomBg"></div>
      </div>
    </div>
  );
}

export default OurTeam;
