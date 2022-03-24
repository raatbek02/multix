import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { $host } from "../../../http";
import { setContactData } from "../../../store/contact_store";

import black_pen from "../../../assets/images/adminImages/black_pencil.png";
import black_bin from "../../../assets/images/adminImages/black_bin.png";
import Modal from "../../../components/UI/Modal/Modal";
import "./AdminContact.css";
import ContactEditting from "./ContactEditting";

function AdminContact() {
  const [activeEdit, setActiveEdit] = useState(false);
  const [activeAdd, setActiveAdd] = useState(false);

  const [detailTeam, setDetailTeam] = useState({});

  const dispatch = useDispatch();
  const contactData = useSelector((s) => s.contact_store.contactData);

//   const deletedItem = () => toast.error("Deleted");

  const getContact = async () => {
    await $host.get(`en/api/contact_data/`).then(({ data }) => {
      dispatch(setContactData(data));
    });
  };

//   const deleteTeamDetail = async (id) => {
//     await $host.delete(`en/api/contact_data/${id}/`).then((res) => {
//       $host.get(`en/api/contact_data/`).then(({ data }) => {
//         dispatch(setContactData(data));
//         deletedItem();
//       });
//     });
//   };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div className="adminContact">
      <div className="adminTeam">
        <div className="adminTeam__header">
          <h2>TEAM</h2>
          {/* <div className="adminTeam__header--btn">
            <button
              onClick={() => {
                setActiveAdd(true);
              }}
            >
              Add
            </button>
          </div> */}
        </div>

        <div className="adminTeam__content">
          <table>
            <thead>
              <tr>
                <th>
                  <div className="adminTeam__item--bg"></div>
                </th>
                <th>No.</th>
                <th>Title</th>
                <th>First description</th>
                <th>Second description</th>
                <th>Data of creation</th>
                <th>Editting</th>
              </tr>
            </thead>
            <tbody>
              {contactData &&
                contactData.map((el, index) => (
                  <tr key={el.id}>
                    <td>
                      <div className="adminTeam__item--bg"></div>
                    </td>
                    <td>
                      <span>{index + 1}</span>
                    </td>
                    <td>
                      <div className="adminTeam__item--name">
                        <img src={el.image} alt="" />
                        <span>{el.title}</span>
                      </div>
                    </td>
                    <td>
                      <span>{el.description}</span>
                    </td>
                    <td>
                      <span>{el.description_two}</span>
                    </td>
                    <td>{el.createdAt.slice(0, 10)}</td>
                    <td>
                      <div className="adminTeam__edit">
                        <button
                          onClick={() => {
                            setActiveEdit(true);
                            setDetailTeam(el);
                          }}
                        >
                          <img src={black_pen} alt="" />
                        </button>
                        {/* <button
                          onClick={() => {
                            deleteTeamDetail(el.id);
                          }}
                        >
                          <img src={black_bin} alt="" />
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Modal active={activeEdit} setActive={setActiveEdit}>
          <ContactEditting
            detailTeam={detailTeam}
            setActiveEdit={setActiveEdit}
          />
        </Modal>
        <Modal active={activeAdd} setActive={setActiveAdd}>
          {/* <AddTeam setActiveAdd={setActiveAdd} /> */}
        </Modal>
      </div>
    </div>
  );
}

export default AdminContact;
