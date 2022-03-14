import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Zoom } from "react-reveal";
import { useNavigate } from "react-router-dom";
import os1 from "../../assets/images/main_images/ourServices_images/os1.png";
import os_arrow from "../../assets/images/main_images/ourServices_images/os_arrow.svg";
import { $host } from "../../http";
import { SERVICE_DETAIL } from "../../utils/consts";

import Banner_bg from "../Banner_bg/Banner_bg";
import Serviceforbusiness from "../Serviceforbusiness/Serviceforbusiness";
import "./OurServicesPage.css";

function OurServicesPage() {
  const [bgData, setBgData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const serviceData = useSelector((s) => s.service_store.serviceData);

  const getBannerBg = async () => {
    await $host
      .get(`en/api/background-consultant/`)
      .then(({ data }) => {
        setBgData(data[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
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
    <div className="ourServicesPage">
      <Banner_bg title={"Our Services"} bg={bgData.image} />

      <div className="ourServicesPage__content">
        <div className="flex__content">
          <Zoom cascade>
            {serviceData &&
              serviceData.map((el) => (
                <div className="flex__item">
                  <div className="flex__item--img">
                    <img src={el.image} alt="" />
                  </div>
                  <div className="flex__item--title">{el.title}</div>
                  <div className="flex__item--description">
                    {el.description}
                  </div>
                  <div
                    onClick={() => navigate(`${SERVICE_DETAIL}/${el.id}`)}
                    className="flex__item--readMore"
                  >
                    <span>Read More</span>
                    <img src={os_arrow} alt="" />
                  </div>
                </div>
              ))}
          </Zoom>
        </div>
      </div>

      <Serviceforbusiness />
    </div>
  );
}

export default OurServicesPage;
