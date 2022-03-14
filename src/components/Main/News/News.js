import React from "react";
import { useSelector } from "react-redux";
import { Bounce, Zoom } from "react-reveal";
import { useNavigate } from "react-router-dom";

import os_arrow from "../../../assets/images/main_images/ourServices_images/os_arrow.svg";
import { NEWS_DETAIL } from "../../../utils/consts";

import "./News.css";

function News() {
  const navigate = useNavigate();
  const newsData = useSelector((s) => s.news_store.newsData);
  let newsMain = newsData.slice(0, 3);

  return (
    <div className="news">
      <div className="news__container ">
        <div className="title__blue">
          <Bounce left>LATEST NEWS</Bounce>
        </div>
        <div className="news__subtitle">
          <Bounce right>
            We have some special crieteria that will help you
          </Bounce>
        </div>

        <div className="flex__content">
          {newsMain &&
            newsMain.map((el) => (
              <Zoom cascade>
                <div className="flex__item">
                  <div className="flex__item--img">
                    <img src={el.image} alt="" />
                  </div>
                  <div className="flex__item--title">{el.title}</div>
                  <div className="flex__item--description">
                    {el.description}
                  </div>
                  <div
                    onClick={() => navigate(`${NEWS_DETAIL}/${el.id}`)}
                    className="flex__item--readMore"
                  >
                    <span>Read More</span>
                    <img src={os_arrow} alt="" />
                  </div>
                </div>
              </Zoom>
            ))}
        </div>
      </div>
    </div>
  );
}

export default News;
