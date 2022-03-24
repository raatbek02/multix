import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { $host } from "../../../http";
import { setNewsData } from "../../../store/news_store";
import { toast } from "react-toastify";
import Modal from "../../../components/UI/Modal/Modal";
import ItemEditting from "../ItemEditting/ItemEditting";
import ItemAdd from "../ItemEditting/ItemAdd";
import black_pen from "../../../assets/images/adminImages/black_pencil.png";
import black_bin from "../../../assets/images/adminImages/black_bin.png";

import { setSecondStatisticsData } from "../../../store/secondStatistics_store";
import "./AdminInfo.css";

function AdminInfo() {
  const [activeEdit, setActiveEdit] = useState(false);
  const [activeAdd, setActiveAdd] = useState(false);

  const [detailItem, setDetailItem] = useState({});

  const dispatch = useDispatch();
  const secondStatisticsData = useSelector(
    (s) => s.secondStatistics_store.secondStatisticsData
  );

  const deletedItem = () => toast.error("Deleted");

  const deleteDetailItem = async (id) => {
    await $host.delete(`en/api/information/${id}/`).then((res) => {
      $host.get(`en/api/information/`).then(({ data }) => {
        dispatch(setSecondStatisticsData(data));
        deletedItem();
      });
    });
  };

  return (
    <div className="adminInfo">
      <div className="adminTeam__header">
        <h2>INFO</h2>
        <div className="adminTeam__header--btn">
          <button
            onClick={() => {
              setActiveAdd(true);
            }}
          >
            Add
          </button>
        </div>
      </div>

      <div className="adminInfo__content">
        <table>
          <thead>
            <tr>
              <th>
                <div className="adminTeam__item--bg"></div>
              </th>
              <th>No.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Date of creation</th>
              <th>Quantity</th>

              <th>Editting</th>
            </tr>
          </thead>
          <tbody>
            {secondStatisticsData &&
              secondStatisticsData.map((el, index) => (
                <tr key={el.id}>
                  <td>
                    <div className="adminTeam__item--bg"></div>
                  </td>
                  <td>
                    <span>{index + 1}</span>
                  </td>
                  <td>
                    <div className="adminInfo__content--image">
                      <img src={el.image} alt="" />
                    </div>
                  </td>
                  <td>
                    <span>{el.title}</span>
                  </td>
                  <td>
                    <span>{el.createdAt.slice(0, 10)}</span>
                  </td>
                  <td>
                    <span>{el.description}</span>
                  </td>
                  <td>
                    <div className="adminTeam__edit">
                      <button
                        onClick={() => {
                          setActiveEdit(true);
                          setDetailItem(el);
                        }}
                      >
                        <img src={black_pen} alt="" />
                      </button>
                      <button
                        onClick={() => {
                          deleteDetailItem(el.id);
                        }}
                      >
                        <img src={black_bin} alt="" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Modal active={activeEdit} setActive={setActiveEdit}>
        <ItemEditting
          detailItem={detailItem}
          setActiveEdit={setActiveEdit}
          api_name={"information"}
          dispatchData={setSecondStatisticsData}
          textareaName={"Quantity"}
        />
      </Modal>
      <Modal active={activeAdd} setActive={setActiveAdd}>
        <ItemAdd
          setActiveAdd={setActiveAdd}
          api_name={"information"}
          dispatchData={setSecondStatisticsData}
          textareaName={"Quantity"}
        />
      </Modal>
    </div>
  );
}

export default AdminInfo;
