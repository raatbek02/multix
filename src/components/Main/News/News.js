import React from "react";
import { useSelector } from "react-redux";

import os_arrow from "../../../assets/images/main_images/ourServices_images/os_arrow.svg";

import "./News.css";

function News() {
  const newsData = useSelector((s) => s.news_store.newsData);

  let newsMain = newsData.slice(0, 3);
  console.log("newsMain", newsMain);

  return (
    <div className="news">
      <div className="news__container ">
        <div className="title__blue">LATEST NEWS</div>
        <div className="news__subtitle">
          We have some special crieteria that will help you
        </div>

        <div className="flex__content">
          {newsMain &&
            newsMain.map((el) => (
              <div className="flex__item">
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
    </div>
  );
}

export default News;
