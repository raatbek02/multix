import React, { useEffect, useState } from "react";
import Banner_bg from "../Banner_bg/Banner_bg";
import bg from "../../assets/images/main_images/secondStatistics_images/SS_bg.png";
import img_1 from "../../assets/images/pages_images/consultantDetail_images/img_1.png";
import dots from "../../assets/images/main_images/statistics_images/statistics_dots.png";

import "./ConsultantDetail.css";
import Serviceforbusiness from "../Serviceforbusiness/Serviceforbusiness";
import { useParams } from "react-router-dom";
import { $host } from "../../http";
import { CircularProgress } from "@mui/material";

function ConsultantDetail() {
  const [bgData, setBgData] = useState({});
  const [oneConsultant, setOneConsultant] = useState({});
  const [loading, setLoading] = useState(true);

  const getBannerBg = async () => {
    await $host.get(`en/api/background-consultant/`).then(({ data }) => {
      setBgData(data[0]);
    });
  };

  const { id } = useParams();

  const getOneConsultant = async () => {
    await $host
      .get(`en/api/consultant/${id}`)
      .then(({ data }) => {
        setOneConsultant(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getBannerBg();
    getOneConsultant();
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
    <div className="consultantDetail">
      <Banner_bg title={"CONSULTANT COORDINATION"} bg={bgData.image} />

      <div className="consultantDetail__container">
        <div className="consultantDetail__content">
          <div className="consultantDetail__left">
            <div className="consultantDetail__left--img">
              <img src={oneConsultant.image} alt="" />
            </div>
            <div className="consultantDetail__left--title">
              {oneConsultant.title}
            </div>
            <div className="consultantDetail__left--description">
              {oneConsultant.description}
            </div>
          </div>
          <div className="consultantDetail__right">
            <div className="consultantDetail__contact">
              <div className="consultantDetail__contact--title">
                QUICK CONTACT
              </div>
              <div className="consultantDetail__contact--form">
                <p>
                  <input type={"text"} placeholder="First name" />
                </p>
                <p>
                  <input type={"text"} placeholder="Phone number" />
                </p>
                <p>
                  <input type={"text"} placeholder="Email Address" />
                </p>
                <p>
                  <textarea type={"text"} placeholder="Message" />
                </p>

                <div className="consultantDetail__contact--btn">
                  <button>SUBMIT</button>
                </div>
              </div>
            </div>
            <div className="consultantDetail__right--dots">
              <div className="consultantDetail__right--dot1">
                <img src={dots} alt="" />
              </div>
              <div className="consultantDetail__right--dot2">
                <img src={dots} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Serviceforbusiness />
    </div>
  );
}

export default ConsultantDetail;
