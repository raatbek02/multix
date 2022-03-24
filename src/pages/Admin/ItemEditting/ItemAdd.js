import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { $host } from "../../../http/index";
import { add_uploadImage } from "../../../store/uploadImage";
import UploadImage from "../UploadImage/UploadImage";
import "./ItemEditting.css";

function ItemAdd({ setActiveAdd, api_name, dispatchData, textareaName }) {
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

  const AddItem = async () => {
    const fd = new FormData();
    fd.append("title", item_input.title);
    fd.append("description", item_input.description);
    fd.append("image", selectedImage);

    await $host
      .post(`en/api/${api_name}/`, fd, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        item_input.title = "";
        item_input.description = "";
        dispatch(add_uploadImage(""));

        $host.get(`en/api/${api_name}/`).then(({ data }) => {
          dispatch(dispatchData(data));
        });

        successChanged();
      });
  };

  const cancelAdd = () => {
    item_input.title = "";
    item_input.description = "";
    dispatch(add_uploadImage(""));
  };
  return (
    <div className="itemEditting">
      <div className="itemEditting__container">
        <div className="itemEditting__header">
          <h2>{api_name}</h2>
          <div className="itemEditting__btns">
            <button
              onClick={() => {
                AddItem();
                setActiveAdd(false);
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                cancelAdd();
                setActiveAdd(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="itemEditting__content">
          <div className="itemEditting__form">
            <div className="itemEditting__item">
              <div className="itemEditting__item--left">
                <label>Title</label>
                <input
                  onChange={handleInput}
                  name="title"
                  value={item_input.title}
                  className="itemEditting__item--input"
                  type={"text"}
                  placeholder="Title"
                />

                <UploadImage />
              </div>
              <div className="itemEditting__item--right">
                <label>Description</label>
                <textarea
                  onChange={handleInput}
                  name="description"
                  value={item_input.description}
                  type={"text"}
                  placeholder={textareaName || "Description"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemAdd;
