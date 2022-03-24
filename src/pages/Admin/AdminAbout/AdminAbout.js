import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { $host } from "../../../http";
import { setAboutData } from "../../../store/about";
import { add_uploadImage } from "../../../store/uploadImage";
import UploadImage from "../UploadImage/UploadImage";
import "./AdminAbout.css";

function AdminAbout() {
  const [item_input, setItem_input] = React.useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const selectedImage = useSelector((s) => s.uploadImage.uploadImage);
  const successChanged = () => toast.success("Successfully modified");

  const handleInput = (e) => {
    e.persist();
    setItem_input({ ...item_input, [e.target.name]: e.target.value });
  };

  const ubdateItem = async () => {
    const fd = new FormData();
    fd.append("title", item_input.title);
    fd.append("description", item_input.description);

    await $host
      .put(`en/api/about/1/`, fd, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        item_input.title = "";
        item_input.description = "";
        dispatch(add_uploadImage(""));

        $host.get(`en/api/about`).then(({ data }) => {
          dispatch(setAboutData(data));
        });

        successChanged();
      });
  };

  const ubdate_bg = async () => {
    const fd = new FormData();
    fd.append("image", selectedImage);

    await $host.put(`en/api/background-about-us/1/`, fd, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const cancelModified = () => {
    item_input.title = "";
    item_input.description = "";
    dispatch(add_uploadImage(""));
  };

  return (
    <div className="adminAbout">
      <div className="adminTeam__header">
        <h2>ABOUT</h2>
        <div className="adminTeam__header--btn">
          <button
            onClick={() => {
              ubdateItem();
              ubdate_bg();
            }}
          >
            SAVE
          </button>
          <button
            onClick={() => {
              cancelModified();
            }}
          >
            CANCEL
          </button>
        </div>
      </div>
      <div className="adminAbout__content">
        <div className="adminAbout__form">
          <div className="adminAbout__form--left">
            <div className="adminAbout__form--item">
              <label>Title</label>
              <input
                onChange={handleInput}
                name="title"
                value={item_input.title}
                className="adminAbout__input"
                type={"text"}
                placeholder="About us"
              />
            </div>
            <div className="adminAbout__form--item">
              <label>Image</label>
              <UploadImage />
            </div>
          </div>
          <div className="adminAbout__form--right">
            <div className="adminAbout__form--item">
              <label>Description</label>
              <textarea
                onChange={handleInput}
                name="description"
                value={item_input.description}
                type={"text"}
                placeholder="Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAbout;
