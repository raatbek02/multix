import React, { useState } from "react";
import { $host } from "../../http";

import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import email from "../../assets/images/header_images/email.svg";
import phone from "../../assets/images/header_images/phone.svg";
import { addSearchItems } from "../../store/search_store";
import {
  ABOUT,
  CONSULTANT,
  CONTACTPAGE,
  HOME_ROUTES,
  NEWSPAGE,
  OURSERVICESPAGE,
  SEARCH_ROUTE,
  TEAMPAGE,
} from "../../utils/consts";

import "./Header.css";

function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(1);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const searchHandler = async (e) => {
    if (search && e.key === "Enter") {
      await $host.get(`en/api/news/?search=${search}`).then(({ data }) => {
        dispatch(addSearchItems(data));
        setSearch("");
        navigate(SEARCH_ROUTE);
      });
    }
  };

  const searchHandler_2 = async () => {
    await $host.get(`en/api/news/?search=${search}`).then(({ data }) => {
      dispatch(addSearchItems(data.results));
      setSearch("");
      navigate(SEARCH_ROUTE);
    });
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content desktop">
          <div className="header__left">
            <h1 className="header__title">Bizuba</h1>
          </div>
          <div className="header__right">
            <div className="header__right--top">
              <div className="header__right--top--item">
                <img src={email} alt="" />
                <span>infobizuba@gmail.com</span>
              </div>
              <div className="header__right--top--item">
                <img src={phone} alt="" />
                <span>+996 555 555 555</span>
              </div>
              {/* <div className="header__right--top--item">
                <span>En</span>
                <img src={right_arrow} alt="" />
              </div> */}
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
                <input
                  type={"text"}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => searchHandler(e)}
                />
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
              {/* <div className="header__right--top--item">
                <span>En</span>
                <img src={right_arrow} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
