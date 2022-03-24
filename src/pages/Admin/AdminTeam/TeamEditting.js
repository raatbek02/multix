import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { $host } from "../../../http/index";
import { setTeamData } from "../../../store/team_store";
import { add_uploadImage } from "../../../store/uploadImage";
import UploadImage from "../UploadImage/UploadImage";
import "./TeamEditting.css";

function TeamEditting({ detailTeam, setActiveEdit }) {
  const [team_input, setTeam_input] = React.useState({
    title: "",
    position: "",
    contact_phone: "",
    contact_team_email: "",
    description: "",
  });

  const dispatch = useDispatch();
  const selectedImage = useSelector((s) => s.uploadImage.uploadImage);
  const successChanged = () => toast.success("Successfully modified");

  const handleInput = (e) => {
    e.persist();
    setTeam_input({ ...team_input, [e.target.name]: e.target.value });
  };

  const ubdateteam = async () => {
    const fd = new FormData();
    fd.append("title", team_input.title);
    fd.append("position", team_input.position);
    fd.append("contact_phone", team_input.contact_phone);
    fd.append("contact_team_email", team_input.contact_team_email);
    fd.append("description", team_input.description);
    fd.append("image", selectedImage);

    await $host
      .put(`en/api/team/${detailTeam.id}/`, fd, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        team_input.title = "";
        team_input.position = "";
        team_input.contact_phone = "";
        team_input.contact_team_email = "";
        team_input.description = "";
        dispatch(add_uploadImage(""));

        $host.get(`en/api/team/`).then(({ data }) => {
          dispatch(setTeamData(data));
        });

        successChanged();
      });
  };

  const cancelModified = () => {
    team_input.title = "";
    team_input.position = "";
    team_input.contact_phone = "";
    team_input.contact_team_email = "";
    team_input.description = "";
    dispatch(add_uploadImage(""));
  };
  return (
    <div className="teamEditting">
      <div className="teamEditting__container">
        <div className="teamEditting__header">
          <h2>Team</h2>{" "}
          <div className="teamEditting__btns">
            <button
              onClick={() => {
                ubdateteam();
                setActiveEdit(false);
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                cancelModified();
                setActiveEdit(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="teamEditting__content">
          <div className="teamEditting__form">
            <div className="teamEditting__item">
              <div className="teamEditting__item--left">
                <label>Name</label>
                <input
                  onChange={handleInput}
                  name="title"
                  value={team_input.title}
                  className="teamEditting__item--input"
                  type={"text"}
                  placeholder="Name"
                />
              </div>
              <div className="teamEditting__item--right">
                <label>Position</label>
                <input
                  onChange={handleInput}
                  name="position"
                  value={team_input.position}
                  className="teamEditting__item--input"
                  type={"text"}
                  placeholder="Position"
                />
              </div>
            </div>
            <div className="teamEditting__item">
              <div className="teamEditting__item--left">
                <label>Phone</label>
                <input
                  onChange={handleInput}
                  name="contact_phone"
                  value={team_input.contact_phone}
                  className="teamEditting__item--input"
                  type={"number"}
                  placeholder="Phone"
                />
              </div>
              <div className="teamEditting__item--right">
                <label>Email</label>
                <input
                  onChange={handleInput}
                  name="contact_team_email"
                  value={team_input.contact_team_email}
                  className="teamEditting__item--input"
                  type={"email"}
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="teamEditting__item ">
              <div className="teamEditting__item--left ">
                <label>Image</label>

                <UploadImage />
              </div>
              <div className="teamEditting__item--right">
                <label>Description</label>
                <textarea
                  onChange={handleInput}
                  name="description"
                  value={team_input.description}
                  type={"text"}
                  placeholder="Description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamEditting;
