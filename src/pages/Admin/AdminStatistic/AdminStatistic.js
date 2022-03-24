import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { $host } from "../../../http";
import { setSecondStatisticsData } from "../../../store/secondStatistics_store";

import "./AdminStatistic.css";

function AdminStatistic() {
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
    <div className="adminStatistic">
      <div className="adminStatistic__content">
        {secondStatisticsData &&
          secondStatisticsData.map((el) => (
            <div className="adminStatistic__item">
              <div className="adminStatistic__item--left">
                <div className="adminStatistic__item--logo">
                  <img src={el.image} alt="" />
                </div>
              </div>
              <div className="adminStatistic__item--right">
                <div className="adminStatistic__item--title">{el.title}</div>
                <div className="adminStatistic__item--description">
                  {el.description}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AdminStatistic;
