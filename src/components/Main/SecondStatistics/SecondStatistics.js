import React, { useEffect, useState } from "react";
import { $host } from "../../../http";
import { Bounce } from "react-reveal";
import bg from "../../../assets//images/main_images/secondStatistics_images/SS_bg.png";
import ss_logo1 from "../../../assets//images/main_images/secondStatistics_images/ss_logo1.svg";
import ss_logo2 from "../../../assets//images/main_images/secondStatistics_images/ss_logo2.svg";
import ss_logo3 from "../../../assets//images/main_images/secondStatistics_images/ss_logo3.svg";
import ss_logo4 from "../../../assets//images/main_images/secondStatistics_images/ss_logo4.svg";

import "./SecondStatistics.css";
import { setSecondStatisticsData } from "../../../store/secondStatistics_store";
import { useDispatch, useSelector } from "react-redux";

function SecondStatistics() {
  const dispatch = useDispatch();
  const secondStatisticsData = useSelector(
    (s) => s.secondStatistics_store.secondStatisticsData
  );

  const getData = async () => {
    await $host.get(`en/api/information/`).then(({ data }) => {
      dispatch(setSecondStatisticsData(data));
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="secondStatistics">
      <div className="secondStatistics__container">
        <Bounce left cascade>
          <div className="secondStatistics__content">
            {secondStatisticsData &&
              secondStatisticsData.map((el) => (
                <div className="secondStatistics__item">
                  <div className="secondStatistics__logo">
                    <img src={el.image} alt="" />
                  </div>
                  <div className="secondStatistics__number">{el.title}</div>
                  <div className="secondStatistics__text">{el.description}</div>
                </div>
              ))}
          </div>
        </Bounce>
      </div>
      <div className="secondStatistics__bg">
        <img src={bg} alt="" />
      </div>
    </div>
  );
}

export default SecondStatistics;
