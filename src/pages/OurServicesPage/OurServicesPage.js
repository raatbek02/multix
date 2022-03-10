import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import os1 from "../../assets/images/main_images/ourServices_images/os1.png";
import os_arrow from "../../assets/images/main_images/ourServices_images/os_arrow.svg";
import { $host } from "../../http";

import Banner_bg from "../Banner_bg/Banner_bg";
import Serviceforbusiness from "../Serviceforbusiness/Serviceforbusiness";
import "./OurServicesPage.css";

function OurServicesPage() {
  const [bgData, setBgData] = useState({});
  const [loading, setLoading] = useState(true);

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
          {serviceData &&
            serviceData.map((el) => (
              <div className="flex__item">
                <div className="flex__item--img">
                  <img src={os1} alt="" />
                </div>
                <div className="flex__item--title">CONSULTANT COORDINATION</div>
                <div className="flex__item--description">
                  Lorem ipsum dolor sit amet, an labores explicari qui, eu
                  nostrum copiosae argum entum has. Latine propriae quo no unum.
                </div>
                <div className="flex__item--readMore">
                  <span>Read More</span>
                  <img src={os_arrow} alt="" />
                </div>
              </div>
            ))}
        </div>
      </div>

      <Serviceforbusiness />
    </div>
  );
}

export default OurServicesPage;
