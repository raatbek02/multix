import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { $host } from "../../../http/index";
import { setContactData } from "../../../store/contact_store";
import { add_uploadImage } from "../../../store/uploadImage";
import UploadImage from "../UploadImage/UploadImage";
import "./ContactEditting.css";

function ContactEditting({ detailTeam, setActiveEdit }) {
  const [contact_input, setContact_input] = React.useState({
    title: "",
    description: "",
    description_two: "",
    image_footer: "",
  });

  const dispatch = useDispatch();
  const selectedImage = useSelector((s) => s.uploadImage.uploadImage);
  const successChanged = () => toast.success("Successfully modified");

  const handleInput = (e) => {
    e.persist();
    setContact_input({ ...contact_input, [e.target.name]: e.target.value });
  };

  const ubdateContact = async () => {
    const fd = new FormData();
    fd.append("title", contact_input.title);
    fd.append("description", contact_input.description);
    fd.append("description_two", contact_input.description_two);
    fd.append("image_footer", selectedImage);

    await $host
      .put(`en/api/contact_data/${detailTeam.id}/`, fd, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        contact_input.title = "";
        contact_input.description = "";
        contact_input.description_two = "";
        contact_input.image_footer = "";
        dispatch(add_uploadImage(""));

        $host.get(`en/api/contact_data/`).then(({ data }) => {
          dispatch(setContactData(data));
        });

        successChanged();
      });
  };

  const cancelModified = () => {
    contact_input.title = "";
    contact_input.description = "";
    contact_input.description_two = "";
    contact_input.image_footer = "";
    dispatch(add_uploadImage(""));
  };
  return (
    <div className="teamEditting">
      <div className="teamEditting__container">
        <div className="teamEditting__header">
          <h2>Contact</h2>{" "}
          <div className="teamEditting__btns">
            <button
              onClick={() => {
                ubdateContact();
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
                <label>Title</label>
                <input
                  onChange={handleInput}
                  name="title"
                  value={contact_input.title}
                  className="teamEditting__item--input"
                  type={"text"}
                  placeholder="Name"
                />
              </div>
              <div className="teamEditting__item--right">
                <label>First description</label>
                <input
                  onChange={handleInput}
                  name="description"
                  value={contact_input.description}
                  className="teamEditting__item--input"
                  type={"text"}
                  placeholder="First description"
                />
              </div>
            </div>
            <div className="teamEditting__item">
              <div className="teamEditting__item--left">
                <label>Image </label>

                <UploadImage />
              </div>
              <div className="teamEditting__item--right">
                <label>Second description</label>
                <input
                  onChange={handleInput}
                  name="description_two"
                  value={contact_input.contact_team_email}
                  className="teamEditting__item--input"
                  type={"text"}
                  placeholder="Second description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactEditting;
