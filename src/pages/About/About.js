import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Banner_bg from "../Banner_bg/Banner_bg";
import bg from "../../assets/images/main_images/secondStatistics_images/SS_bg.png";
import "./About.css";
import Serviceforbusiness from "../Serviceforbusiness/Serviceforbusiness";

import { $host } from "../../http";

function About() {
  const [bgData, setBgData] = useState({});
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBannerBg = async () => {
    await $host.get(`en/api/background-about-us/`).then(({ data }) => {
      setBgData(data[0]);
    });
  };

  const getAboutData = async () => {
    await $host
      .get(`en/api/about/`)
      .then(({ data }) => {
        setAboutData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getBannerBg();
    getAboutData();
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
    <div className="about">
      <Banner_bg title={"About us"} bg={bgData.image} />

      <div className="about__content">
        {aboutData &&
          aboutData.map((el) => (
            <div key={el.id} className="about__description">
              {el.description}
            </div>
          ))}
      </div>

      <Serviceforbusiness />
    </div>
  );
}
export default About;
