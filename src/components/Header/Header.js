import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import email from "../../assets/images/header_images/email.svg";
import phone from "../../assets/images/header_images/phone.svg";
import right_arrow from "../../assets/images/header_images/right_arrow.svg";
import {
  ABOUT,
  CONSULTANT,
  CONTACTPAGE,
  HOME_ROUTES,
  NEWSPAGE,
  OURSERVICESPAGE,
  TEAMPAGE,
} from "../../utils/consts";

import "./Header.css";

function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(1);
  console.log(activeLink);

  const menuList = [
    {
      id: 1,
      title: "Home",
      path: HOME_ROUTES,
    },
    {
      id: 2,
      title: "About us",
      path: ABOUT,
    },
    {
      id: 3,
      title: "Team",
      path: TEAMPAGE,
    },
    {
      id: 4,
      title: "Consultant",
      path: CONSULTANT,
    },
    {
      id: 5,
      title: "Service",
      path: OURSERVICESPAGE,
    },
    {
      id: 6,
      title: "News",
      path: NEWSPAGE,
    },
    {
      id: 7,
      title: "Contacts",
      path: CONTACTPAGE,
    },
  ];

  // document.body.style.overflow = activeMobileMenu ? "hidden " : "auto ";
  let root = document.getElementById("root");
  root.style.overflowY = activeMobileMenu ? "hidden " : "auto ";

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content desktop">
          <div className="header__left">
            <h1 className="header__title">Multix</h1>
          </div>
          <div className="header__right">
            <div className="header__right--top">
              <div className="header__right--top--item">
                <img src={email} alt="" />
                <span>infomultix@gmail.com</span>
              </div>
              <div className="header__right--top--item">
                <img src={phone} alt="" />
                <span>+996 555 555 555</span>
              </div>
              <div className="header__right--top--item">
                <span>En</span>
                <img src={right_arrow} alt="" />
              </div>
            </div>
            <div className="header__right--bottom">
              <div className="header__menu">
                <ul>
                  {menuList.map((el) => (
                    <li
                      key={el.id}
                      onClick={() => setActiveLink(el.id)}
                      className={
                        activeLink === el.id ? "li_item _active" : "li_item"
                      }
                    >
                      <NavLink to={el.path}>{el.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="header__search">
                <input type={"text"} />
                <img src="https://akfa.kg/static/media/lupa.fb555f47.svg" />
              </div>
            </div>
          </div>
        </div>

        <div className="header__content mobile">
          <p>
            <div className="header__mobile--item">
              <h1 className="header__title">Multix</h1>
            </div>
            <div className="header__mobile--item">
              <div className="header__search">
                <input type={"text"} />
                <img src="https://akfa.kg/static/media/lupa.fb555f47.svg" />
              </div>
            </div>
            <div className="header__mobile--item">
              <div
                className={
                  activeMobileMenu
                    ? "header__mobile--button _active"
                    : "header__mobile--button"
                }
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              >
                <span></span>
              </div>
            </div>
          </p>

          <div
            className={
              activeMobileMenu
                ? "header__mobile--menu _active"
                : "header__mobile--menu"
            }
          >
            <div className="header__menu">
              <ul>
                {menuList.map((el) => (
                  <li key={el.id}>
                    <NavLink to={el.path}>{el.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="header__right--top">
              <div className="header__right--top--item">
                <img src={email} alt="" />
                <span>infomultix@gmail.com</span>
              </div>
              <div className="header__right--top--item">
                <img src={phone} alt="" />
                <span>+996 555 555 555</span>
              </div>
              <div className="header__right--top--item">
                <span>En</span>
                <img src={right_arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
