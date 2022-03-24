import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import black_pen from "../../../assets/images/adminImages/black_pencil.png";
import black_bin from "../../../assets/images/adminImages/black_bin.png";

import "./AdminNews.css";
import { $host } from "../../../http";
import { setNewsData } from "../../../store/news_store";
import { toast } from "react-toastify";
import Modal from "../../../components/UI/Modal/Modal";
import ItemEditting from "../ItemEditting/ItemEditting";
import ItemAdd from "../ItemEditting/ItemAdd";

function AdminConsultant() {
  const [activeEdit, setActiveEdit] = useState(false);
  const [activeAdd, setActiveAdd] = useState(false);

  const [detailItem, setDetailItem] = useState({});

  const dispatch = useDispatch();
  const newsData = useSelector((s) => s.news_store.newsData);
  const deletedItem = () => toast.error("Deleted");

  const deleteDetailItem = async (id) => {
    await $host.delete(`en/api/consultant/${id}/`).then((res) => {
      $host.get(`en/api/consultant/`).then(({ data }) => {
        dispatch(setNewsData(data));
        deletedItem();
      });
    });
  };

  return (
    <div className="adminNews">
      <div className="adminItem">
        <div className="adminTeam__header">
          <h2>NEWS</h2>
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

        <div className="adminItem__content">
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
                <th>Description</th>

                <th>Editting</th>
              </tr>
            </thead>
            <tbody>
              {newsData &&
                newsData.map((el, index) => (
                  <tr key={el.id}>
                    <td>
                      <div className="adminTeam__item--bg"></div>
                    </td>
                    <td>
                      <span>{index + 1}</span>
                    </td>
                    <td>
                      <div className="adminItem__content--image">
                        <img src={el.image} alt="" />
                      </div>
                    </td>
                    <td>
                      <div className="adminItem__content--title">
                        <span>{el.title}</span>
                      </div>
                    </td>
                    <td className="data--td">
                      <span>{el.createdAt.slice(0, 10)}</span>
                    </td>
                    <td>
                      <div className="adminItem__content--dexcription">
                        <span>{el.description}</span>
                      </div>
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
            api_name={"news"}
            dispatchData={setNewsData}
          />
        </Modal>
        <Modal active={activeAdd} setActive={setActiveAdd}>
          <ItemAdd
            setActiveAdd={setActiveAdd}
            api_name={"news"}
            dispatchData={setNewsData}
          />
        </Modal>
      </div>
    </div>
  );
}

export default AdminConsultant;
