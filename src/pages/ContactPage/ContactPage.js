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
            <a
              target={"_blank"}
              href="https://www.google.com/maps/search/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9F%D0%BE%D0%B6%D0%B0%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE,+38+%E2%80%8B%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D0%BC%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%E2%80%8B+720017/@42.8600069,74.5858598,17z/data=!3m1!4b1"
            >
              <img src={map_image} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
