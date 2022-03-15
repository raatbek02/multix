import React, { useEffect, useState } from "react";
import { $host } from "../../http";
import CircularProgress from "@mui/material/CircularProgress";

import Banner_bg from "../Banner_bg/Banner_bg";
import Serviceforbusiness from "../Serviceforbusiness/Serviceforbusiness";

import "./TeamPage.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TEAMDETAIL } from "../../utils/consts";
import { Zoom } from "react-reveal";

function TeamPage() {
  const [bgData, setBgData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const teamData = useSelector((s) => s.team_store.teamData);

  const getBannerBg = async () => {
    await $host
      .get(`en/api/background-team/`)
      .then(({ data }) => {
        setBgData(data[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //   const getTeamData = async () => {
  //     await $host
  //       .get(`en/api/team/`)
  //       .then(({ data }) => {
  //       //   setTeamData(data);
  //       })
  // .finally(() => {
  //   setLoading(false);
  // });
  //   };

  useEffect(() => {
    //  getTeamData();
    getBannerBg();
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="loading--block">
        <CircularProgress color="error" />
      </div>
    );
  }

  return (
    <div className="teamPage">
      <Banner_bg title={"TEAM"} bg={bgData.image} />
      <div className="teamPage__container">
        <div className="ourTeam__content">
          {teamData &&
            teamData.map((el) => (
              <Zoom cascade>
                <div
                  key={el.id}
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
      </div>

      <Serviceforbusiness />
    </div>
  );
}

export default TeamPage;
