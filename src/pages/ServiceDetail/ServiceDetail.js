import React, { useEffect, useState } from "react";
import Banner_bg from "../Banner_bg/Banner_bg";
import dots from "../../assets/images/main_images/statistics_images/statistics_dots.png";

// import "./ConsultantDetail.css";
import Serviceforbusiness from "../Serviceforbusiness/Serviceforbusiness";
import { useParams } from "react-router-dom";
import { $host } from "../../http";
import { CircularProgress } from "@mui/material";
import QuickContact from "../QuickContact/QuickContact";
import '../../pageDetail/pageDetail.css'

function ServiceDetail() {
  const [bgData, setBgData] = useState({});
  const [oneService, setOneService] = useState({});
  const [loading, setLoading] = useState(true);

  console.log("oneService", oneService);

  const getBannerBg = async () => {
    await $host.get(`en/api/background-consultant/`).then(({ data }) => {
      setBgData(data[0]);
    });
  };

  const { id } = useParams();

  const getOneService = async () => {
    await $host
      .get(`en/api/service/${id}`)
      .then(({ data }) => {
        setOneService(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getBannerBg();
    getOneService();
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
    <div className="pageDetail">
      <Banner_bg title={"SERVICE"} bg={bgData.image} />

      <div className="pageDetail__container">
        <div className="pageDetail__content">
          <div className="pageDetail__left">
            <div className="pageDetail__left--img">
              <img src={oneService.image} alt="" />
            </div>
            <div className="pageDetail__left--title">{oneService.title}</div>
            <div className="pageDetail__left--description">
              {oneService.description}
            </div>
          </div>
          <div className="pageDetail__right">
            <QuickContact />
            <div className="pageDetail__right--dots">
              <div className="pageDetail__right--dot1">
                <img src={dots} alt="" />
              </div>
              <div className="pageDetail__right--dot2">
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

export default ServiceDetail;
