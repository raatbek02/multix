import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import arrow from "../../assets/images/footer_images/arrow.png";
import { $host } from "../../http";
import { setContactData } from "../../store/contact_store";

import "./Footer.css";

function Footer() {
  const dispatch = useDispatch();
  const contactData = useSelector((s) => s.contact_store.contactData);
  const [backCallInput, setBackCallInput] = useState({
    name: "",
    last_name: "",
    phone: "",
    email: "",
    theme: "",
    description: "",
  });

  const successSubmited = () => toast.success("Callback sent successfully!");

  const handleInput = (e) => {
    setBackCallInput({ ...backCallInput, [e.target.name]: e.target.value });
  };

  const submitBackCall = async (e) => {
    e.preventDefault();

    const data = {
      name: backCallInput.name,
      last_name: backCallInput.last_name,
      phone: backCallInput.phone,
      email: backCallInput.email,
      theme: backCallInput.theme,
      description: backCallInput.description,
    };

    $host
      .post(`en/api/backcall`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setBackCallInput({
          name: "",
          last_name: "",
          phone: "",
          email: "",
          theme: "",
          description: "",
        });

        successSubmited();
      });
  };

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
              <input
                type={"text"}
                placeholder="First name"
                onChange={handleInput}
                name="name"
                value={backCallInput.name}
              />
              <input
                type={"text"}
                placeholder="Last name"
                onChange={handleInput}
                name="last_name"
                value={backCallInput.last_name}
              />
            </div>
            <div className="footer__form--item semiInputs">
              <input
                type={"text"}
                placeholder="Phone number"
                onChange={handleInput}
                name="phone"
                value={backCallInput.phone}
              />
              <input
                type={"text"}
                placeholder="Email Address"
                onChange={handleInput}
                name="email"
                value={backCallInput.email}
              />
            </div>
            <div className="footer__form--item fullInputs">
              <input
                type={"text"}
                placeholder="Subject"
                onChange={handleInput}
                name="theme"
                value={backCallInput.theme}
              />
            </div>
            <div className="footer__form--item fullInputs">
              <textarea
                placeholder="Message"
                onChange={handleInput}
                name="description"
                value={backCallInput.description}
              />
            </div>

            <div className="footer__form--subitBtn">
              <button onClick={(e) => submitBackCall(e)}>SUBMIT</button>
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
