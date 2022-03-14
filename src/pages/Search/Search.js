import React, { useEffect, useState } from "react";
import Banner_bg from "../Banner_bg/Banner_bg";

// import "./ConsultantDetail.css";
import Serviceforbusiness from "../Serviceforbusiness/Serviceforbusiness";
import { useNavigate, useParams } from "react-router-dom";
import { $host } from "../../http";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import os_arrow from "../../assets/images/main_images/ourServices_images/os_arrow.svg";
import "./Search.css";
import { NEWS_DETAIL } from "../../utils/consts";

function Search() {
  const [bgData, setBgData] = useState({});
  const [loading, setLoading] = useState(true);

  const searchedItems = useSelector((s) => s.search_store.searched_items);
  const navigate = useNavigate();

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
    <div className="search">
      <Banner_bg title={"Search results"} bg={bgData.image} />
      <div className="flex__content">
        {searchedItems &&
          searchedItems.map((el) => (
            <div key={el.id} className="flex__item">
              <div className="flex__item--img">
                <img src={el.image} alt="" />
              </div>
              <div className="flex__item--title">{el.title}</div>
              <div className="flex__item--description">{el.description}</div>
              <div
                onClick={() => navigate(`${NEWS_DETAIL}/${el.id}`)}
                className="flex__item--readMore"
              >
                <span>Read More</span>
                <img src={os_arrow} alt="" />
              </div>
            </div>
          ))}
      </div>

      <Serviceforbusiness />
    </div>
  );
}

export default Search;
