import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { set_adminPathName } from "../../../store/adminPathName";
import {
  ADMIN_ABOUT,
  ADMIN_CONSULTANT,
  ADMIN_CONTACT,
  ADMIN_INFO,
  ADMIN_NEWS,
  ADMIN_SERVICE,
  ADMIN_TEAM,
  HOME_ROUTES,
} from "../../../utils/consts";
import { useNavigate } from "react-router-dom";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import home_icon from "../../../assets/images/adminImages/admin_sidebar/home_sidebar.svg";
import team_icon from "../../../assets/images/adminImages/admin_sidebar/team_sidebar.svg";
import consultant_icon from "../../../assets/images/adminImages/admin_sidebar/consultant_sidebar.svg";
import news_icon from "../../../assets/images/adminImages/admin_sidebar/news_sidebar.svg";
import contact_icon from "../../../assets/images/adminImages/admin_sidebar/contact_sidebar.svg";
import about_icon from "../../../assets/images/adminImages/admin_sidebar/about_sidebar.svg";
import service_icon from "../../../assets/images/adminImages/admin_sidebar/service_sidebar.svg";
import info from "../../../assets/images/adminImages/admin_sidebar/info_sidebar.svg";

import "./AdminSidebar.css";

function AdminSidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = [
    {
      id: 1,
      title: "Home",
      image: home_icon,
      path: HOME_ROUTES,
    },
    {
      id: 3,
      title: "Team",
      image: team_icon,
      path: ADMIN_TEAM,
    },
    {
      id: 4,
      title: "Consultant",
      image: consultant_icon,
      path: ADMIN_CONSULTANT,
    },
    {
      id: 5,
      title: "Service",
      image: service_icon,
      path: ADMIN_SERVICE,
    },
    {
      id: 6,
      title: "News",
      image: news_icon,
      path: ADMIN_NEWS,
    },

    {
      id: 2,
      title: "About us",
      image: about_icon,
      path: ADMIN_ABOUT,
    },
    {
      id: 7,
      title: "Contacts",
      image: contact_icon,
      path: ADMIN_CONTACT,
    },
    {
      id: 8,
      title: "Info",
      image: info,
      path: ADMIN_INFO,
    },
  ];

  const [characters, updateCharacters] = useState(list);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="adminSidebar">
      <h1>Bizuba</h1>

      <div className="adminSidebar__content">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="adminSidebar__list">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="adminSidebar__list"
              >
                {characters.map((el, index) => (
                  <Draggable key={el.id} draggableId={el.title} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => {
                          dispatch(set_adminPathName(el.title));
                          localStorage.setItem(
                            "local_adminPathName",
                            JSON.stringify(el.title)
                          );
                          navigate(el.path);
                        }}
                        className="adminSidebar__list--items"
                      >
                        <div className="adminSidebar__logos">
                          <img src={el.image} alt="" />
                        </div>
                        <span>{el.title}</span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div className="adminSidebar__bottom"></div>
      </div>
    </div>
  );
}

export default AdminSidebar;
