import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import address_1 from "../../assets/images/footer_images/address_1.png";
import address_2 from "../../assets/images/footer_images/address_2.png";
import address_3 from "../../assets/images/footer_images/address_3.png";
import arrow from "../../assets/images/footer_images/arrow.png";
import { $host } from "../../http";
import { setContactData } from "../../store/contact_store";

import "./Footer.css";

function Footer() {
  const dispatch = useDispatch();
  const contactData = useSelector((s) => s.contact_store.contactData);

  const getContact = async () => {
    await $host.get(`en/api/contact_data/`).then(({ data }) => {
      dispatch(setContactData(data));
    });
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__form" id="footer__form">
          <div className="footer__form--title">BOOKING FORM</div>
          <div className="footer__form-content">
            <div className="footer__form--item semiInputs">
              <input type={"text"} placeholder="First name" />
              <input type={"text"} placeholder="Last name" />
            </div>
            <div className="footer__form--item semiInputs">
              <input type={"text"} placeholder="Phone number" />
              <input type={"text"} placeholder="Email Address" />
            </div>
            <div className="footer__form--item fullInputs">
              <input type={"text"} placeholder="Subject" />
            </div>
            <div className="footer__form--item fullInputs">
              <textarea placeholder="Message" />
            </div>

            <div className="footer__form--subitBtn">
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
        <div className="footer__middle">
          <div className="footer__moddle--item">
            <div className="footer__moddle--item--title">NEWSLETTER</div>
            <div className="footer__moddle--item--description">
              Detracto contentiones te est, brute ipsum consul an vis. Mea ei
              regione blandit ullamcorper, definiebas constituam vix ei.
            </div>
          </div>
          <div className="footer__moddle--item">
            <div className="footer__moddle--item--title">RECENT POST</div>
            <div className="footer__moddle--item--posts">
              <div className="footer__moddle--item--list">
                <div className="footer__moddle--item--text">
                  Detracto contentiones te est, brute ipsum consul an vis.
                </div>
                <div className="footer__moddle--item--img">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="footer__moddle--item--list">
                <div className="footer__moddle--item--text">
                  Detracto contentiones te est, brute ipsum consul an vis.
                </div>
                <div className="footer__moddle--item--img">
                  <img src={arrow} alt="" />
                </div>
              </div>{" "}
              <div className="footer__moddle--item--list">
                <div className="footer__moddle--item--text">
                  Detracto contentiones te est, brute ipsum consul an vis.
                </div>
                <div className="footer__moddle--item--img">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="footer__moddle--item--list">
                <div className="footer__moddle--item--text">
                  Detracto contentiones te est, brute ipsum consul an vis.
                </div>
                <div className="footer__moddle--item--img">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer__moddle--item">
            <div className="footer__moddle--item--title">ADDRESS</div>
            <div className="footer__moddle--item--address">
              <p>
                {contactData &&
                  contactData.map((el) => (
                    <div key={el.id} className="footer__moddle--item--list">
                      <div className="footer__moddle--item--img">
                        <img src={el.image_footer} alt="" />
                      </div>

                      <div className="footer__moddle--item--text">
                        <p>{el.description}</p> <p>{el.description_two}</p>
                      </div>
                    </div>
                  ))}
              </p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom--top">
            <p>Home </p>
            <p>Terms and Conditions </p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer__bottom--bottom">
            Copyright © 2020, multix. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
