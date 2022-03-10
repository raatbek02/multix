import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ourTeam_bg1 from "../../../assets/images/main_images/ourTeam_images/ourTeam_bg1.png";
import ourTeam_bg2 from "../../../assets/images/main_images/ourTeam_images/ourTeam_bg2.png";
import ourTeam_bg3 from "../../../assets/images/main_images/ourTeam_images/ourTeam_bg3.png";
import { TEAMDETAIL } from "../../../utils/consts";

import "./OurTeam.css";

function OurTeam() {
  const navigate = useNavigate();
  const teamData = useSelector((s) => s.team_store.teamData);
  let teamMain = teamData.slice(0, 3);

  return (
    <div className="ourTeam">
      <div className="ourTeam__container">
        <div className="title__blue">OUR TEAM</div>
        <div className="ourTeam__subtitle">
          We have some special crieteria that will help you
        </div>
        <div className="ourTeam__content">
          {teamMain &&
            teamMain.map((el) => (
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
            ))}
        </div>
        <div className="ourTeam__bottomBg"></div>
      </div>
    </div>
  );
}

export default OurTeam;
