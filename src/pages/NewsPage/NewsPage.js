import React, { useEffect, useState } from "react";
import Banner_bg from "../Banner_bg/Banner_bg";
import os_arrow from "../../assets/images/main_images/ourServices_images/os_arrow.svg";

import "./NewsPage.css";
import Serviceforbusiness from "../Serviceforbusiness/Serviceforbusiness";
import { $host } from "../../http";
import { CircularProgress } from "@mui/material";

function NewsPage() {
  const [bgData, setBgData] = useState({});
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBannerBg = async () => {
    await $host.get(`en/api/background-news/`).then(({ data }) => {
      setBgData(data[0]);
    });
  };

  const getNewsData = async () => {
    await $host
      .get(`en/api/news/`)
      .then(({ data }) => {
        setNewsData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getBannerBg();
    getNewsData();
  }, []);

  if (loading) {
    return (
      <div className="loading--block">
        <CircularProgress color="error" />
      </div>
    );
  }

  return (
    <div className="newsPage">
      <Banner_bg title={"Latest News"} bg={bgData.image} />

      <div className="newsPage__container">
        <div className="flex__content">
          {newsData &&
            newsData.map((el) => (
              <div key={el.id} className="flex__item">
                <div className="flex__item--img">
                  <img src={el.image} alt="" />
                </div>
                <div className="flex__item--title">{el.title}</div>
                <div className="flex__item--description">{el.description}</div>
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

export default NewsPage;