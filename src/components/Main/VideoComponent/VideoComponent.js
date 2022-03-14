import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { $host } from "../../../http";

import "./VideoComponent.css";

function VideoComponent() {
  const [videoData, setVideoData] = useState({});
  console.log(videoData);

  const getVideo = async () => {
    await $host.get(`en/api/video/`).then(({ data }) => {
      setVideoData(data[0]);
    });
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="videoComponent">
      <div className="videoComponent__container">
        <div className="videoComponent__content">
          <div className="videoComponent__left">
            <Fade left>
              <div className="videoComponent__title">
                A TRUE LEADER CAN HELP YOU IN BUSINESS
              </div>
              <div className="videoComponent__description">
                Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
                copiosae argumentum has. Latine propriae quo no, unum ridens
                expetenda id sit, at usu eius eligendi singulis. Sea ocurreret
                principes ne.
              </div>
            </Fade>
          </div>
          <div className="videoComponent__right">
            {" "}
            <Fade right>
              <div className="videoComponent__right--item">
                <video
                  src={videoData.file}
                  width={"100%"}
                  height={"100%"}
                  controls
                ></video>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;
