import React, { useEffect, useState } from "react";
import Banner_bg from "../Banner_bg/Banner_bg";
import bg from "../../assets/images/main_images/secondStatistics_images/SS_bg.png";
import map_image from "../../assets/images/pages_images/contactPage_images/contactPage_map.png";

import "./ContactPage.css";
import { $host } from "../../http";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

function ContactPage() {
  const [bgData, setBgData] = useState({});
  const contactData = useSelector((s) => s.contact_store.contactData);
  const [loading, setLoading] = useState(true);

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
    <div className="contactPage">
      <Banner_bg title={"CONTACTS"} bg={bgData.image} />

      <div className="contactPage__container">
        <div className="contactPage__content">
          <div className="contactPage__content--top">
            {contactData &&
              contactData.map((el) => (
                <div className="contactPage__item">
                  <div className="contactPage__item--title">{el.title}</div>
                  <p>{el.description} </p>
                  <p>{el.description_two}</p>
                </div>
              ))}
          </div>
          <div className="contactPage__content--bottom">
            <img src={map_image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
