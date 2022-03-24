import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_uploadImage } from "../../../store/uploadImage";
import "./UploadImage.css";

function UploadImage() {
  // const [selectedImage, setSelectedImage] = useState();
  const dispatch = useDispatch();
  const selectedImage = useSelector((s) => s.uploadImage.uploadImage);
  console.log("selectedImage", selectedImage);

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      dispatch(add_uploadImage(e.target.files[0]));
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    dispatch(add_uploadImage());
  };

  return (
    <>
      <div>
        <div className="fileInput">
          <label>
            <input
              accept="image/*"
              type="file"
              onChange={imageChange}
              id="uploadFile"
            />
            Upload Image
          </label>
        </div>

        {selectedImage && (
          <div className="fileResults">
            <div className="fileImages">
              <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
            </div>
            <div className="fileDelete">
              <button onClick={removeSelectedImage}>Remove This Image</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UploadImage;
