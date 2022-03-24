import React, { useState } from "react";
import black_pen from "../../../assets/images/adminImages/black_pencil.png";
import black_bin from "../../../assets/images/adminImages/black_bin.png";

import "./AdminTeam.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/UI/Modal/Modal";
import TeamEditting from "./TeamEditting";
import AddTeam from "./AddTeam";
import { $host } from "../../../http";
import { setTeamData } from "../../../store/team_store";
import { toast } from "react-toastify";

function AdminTeam() {
  const [activeEdit, setActiveEdit] = useState(false);
  const [activeAdd, setActiveAdd] = useState(false);

  const [detailTeam, setDetailTeam] = useState({});

  const dispatch = useDispatch();
  const teamData = useSelector((s) => s.team_store.teamData);

  const deletedItem = () => toast.error("Deleted");

  const deleteTeamDetail = async (id) => {
    await $host.delete(`en/api/team/${id}/`).then((res) => {
      $host.get(`en/api/team/`).then(({ data }) => {
        dispatch(setTeamData(data));
        deletedItem();
      });
    });
  };

  return (
    <div className="adminTeam">
      <div className="adminTeam__header">
        <h2>TEAM</h2>
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

      <div className="adminTeam__content">
        <table>
          <thead>
            <tr>
              <th>
                <div className="adminTeam__item--bg"></div>
              </th>
              <th>No.</th>
              <th>NAME</th>
              <th>Position</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Editting</th>
            </tr>
          </thead>
          <tbody>
            {teamData &&
              teamData.map((el, index) => (
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
                    <span>{el.position}</span>
                  </td>
                  <td>
                    <span>{el.contact_team_email}</span>
                  </td>
                  <td>
                    <span>{el.contact_phone}</span>
                  </td>
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
                      <button
                        onClick={() => {
                          deleteTeamDetail(el.id);
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
        <TeamEditting detailTeam={detailTeam} setActiveEdit={setActiveEdit} />
      </Modal>
      <Modal active={activeAdd} setActive={setActiveAdd}>
        <AddTeam setActiveAdd={setActiveAdd} />
      </Modal>
    </div>
  );
}

export default AdminTeam;
