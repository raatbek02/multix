import React, { useEffect, useState } from "react";
import Banner_bg from "../Banner_bg/Banner_bg";
import bg from "../../assets/images/main_images/secondStatistics_images/SS_bg.png";
import ourTeam_bg1 from "../../assets/images/main_images/ourTeam_images/ourTeam_bg1.png";
import contact1 from "../../assets/images/pages_images/teamDetal_images/teamD_contact1.svg";
import contact2 from "../../assets/images/pages_images/teamDetal_images/teamD_contact2.svg";
import contact3 from "../../assets/images/pages_images/teamDetal_images/teamD_contact3.svg";

import dots from "../../assets/images/main_images/statistics_images/statistics_dots.png";

import Serviceforbusiness from "../Serviceforbusiness/Serviceforbusiness";
import "./TeamDetail.css";
import { useParams } from "react-router-dom";
import { $host } from "../../http";
import { CircularProgress } from "@mui/material";

function TeamDetail() {
  const [onePerson, setOnePerson] = useState({});
  const [loading, setLoading] = useState(true);
  const [bgData, setBgData] = useState({});

  const { id } = useParams();

  const getBannerBg = async () => {
    await $host.get(`en/api/background-team/`).then(({ data }) => {
      setBgData(data[0]);
    });
  };

  const getOnePerson = async () => {
    await $host
      .get(`en/api/team/${id}`)
      .then(({ data }) => {
        setOnePerson(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getBannerBg();
    getOnePerson();
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
    <div className="teamDetail">
      <Banner_bg title={onePerson.title} bg={bgData.image} />
      <div className="teamDetail__container">
        <div className="teamDetail__content">
          <div className="teamDetail__left">
            <div className="teamDetail__item">
              <div className="teamDetail__img">
                <img src={onePerson.image} alt="" />
              </div>

              <div className="teamDetail__item--bottom">
                <div className="teamDetail__name">{onePerson.title}</div>
                <div className="teamDetail__position">{onePerson.position}</div>
              </div>
            </div>

            <div className="teamDetail__contact">
              <div className="teamDetail__contact--title">CONTACT</div>
              <div className="teamDetail__contact--list">
                <p>
                  <img src={contact1} alt="" />
                  <span>{onePerson.contact_team_email}</span>
                </p>
                <p>
                  <img src={contact2} alt="" />
                  <span>{onePerson.contact_phone}</span>
                </p>
                <p>
                  <img src={contact3} alt="" />
                  <span>{onePerson.company_url}</span>
                </p>
              </div>
            </div>

            <div className="teamDetail__dots">
              <img src={dots} alt="" />
            </div>
          </div>
          <div className="teamDetail__right">
            <div className="teamDetail__description">
              {onePerson.description}
            </div>
          </div>
        </div>
      </div>
      <Serviceforbusiness />
    </div>
  );
}

export default TeamDetail;
