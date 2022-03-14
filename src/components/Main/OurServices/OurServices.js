import React from "react";
import { useSelector } from "react-redux";
import { Zoom } from "react-reveal";
import { useNavigate } from "react-router-dom";
import os_arrow from "../../../assets/images/main_images/ourServices_images/os_arrow.svg";
import { SERVICE_DETAIL } from "../../../utils/consts";

import "./OurServices.css";

function OurServices() {
  const serviceData = useSelector((s) => s.service_store.serviceData);

  const navigate = useNavigate();

  let serviceMain = serviceData.slice(0, 6);

  return (
    <div className="ourServices">
      <div className="ourServices__container">
        <div className="title__white">
          <Zoom cascade>OUR SERVICES</Zoom>
        </div>
        <div className="ourServices__subTitle">
          <Zoom cascade>We have some special crieteria that will help you</Zoom>
        </div>
        <div className="flex__content">
          {serviceMain &&
            serviceMain.map((el) => (
              <Zoom cascade>
                <div key={el.id} className="flex__item">
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
              </Zoom>
            ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
