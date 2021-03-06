import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { $host } from "../../http";
import { CircularProgress } from "@mui/material";
import Banner_bg from "../Banner_bg/Banner_bg";
import os_arrow from "../../assets/images/main_images/ourServices_images/os_arrow.svg";

import Serviceforbusiness from "../Serviceforbusiness/Serviceforbusiness";
import "./Consultant.css";
import { CONSULTANT_DETAIL } from "../../utils/consts";
import { Zoom } from "react-reveal";
import { useDispatch, useSelector } from "react-redux";
import { setConsultantData } from "../../store/consultant_store";

function Consultant() {
  const [bgData, setBgData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const consultantData = useSelector((s) => s.consultant_store.consultantData);

  const getBannerBg = async () => {
    await $host.get(`en/api/background-consultant/`).then(({ data }) => {
      setBgData(data[0]);
    });
  };

  const getConsultantData = async () => {
    await $host
      .get(`en/api/consultant/`)
      .then(({ data }) => {
        dispatch(setConsultantData(data));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getBannerBg();
    getConsultantData();
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
    <div className="consultant">
      <Banner_bg title={"CONSULTANT COORDINATION"} bg={bgData.image} />

      <div className="consultant__container">
        <div className="flex__content">
          {consultantData &&
            consultantData.map((el) => (
              <Zoom cascade>
                <div
                  key={el.id}
                  className="flex__item"
                  onClick={() => navigate(`${CONSULTANT_DETAIL}/${el.id}`)}
                >
                  <div className="flex__item--img">
                    <img src={el.image} alt="" />
                  </div>
                  <div className="flex__item--title">{el.title}</div>
                  <div className="flex__item--description">
                    {el.description}
                  </div>
                  <div className="flex__item--readMore">
                    <span>Read More</span>
                    <img src={os_arrow} alt="" />
                  </div>
                </div>
              </Zoom>
            ))}
        </div>
      </div>
      <Serviceforbusiness />
    </div>
  );
}

export default Consultant;
