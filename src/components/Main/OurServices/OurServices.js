import React from "react";
import { useSelector } from "react-redux";
import os1 from "../../../assets/images/main_images/ourServices_images/os1.png";
import os2 from "../../../assets/images/main_images/ourServices_images/os2.png";
import os3 from "../../../assets/images/main_images/ourServices_images/os3.png";
import os_arrow from "../../../assets/images/main_images/ourServices_images/os_arrow.svg";

import "./OurServices.css";

function OurServices() {
  const serviceData = useSelector((s) => s.service_store.serviceData);

  let serviceMain = serviceData.slice(0, 6);
  console.log("serviceMain", serviceMain);

  return (
    <div className="ourServices">
      <div className="ourServices__container">
        <div className="title__white">OUR SERVICES</div>
        <div className="ourServices__subTitle">
          We have some special crieteria that will help you
        </div>
        <div className="flex__content">
          {serviceData &&
            serviceData.map((el) => (
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
    </div>
  );
}

export default OurServices;
