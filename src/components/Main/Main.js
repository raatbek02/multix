import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { $host } from "../../http/index";
import { setNewsData } from "../../store/news_store";
import { setServiceData } from "../../store/service_store";
import { setTeamData } from "../../store/team_store";
import Banner from "./Banner/Banner";
import Choose from "./Choose/Choose";
import News from "./News/News";
import OurServices from "./OurServices/OurServices";
import OurTeam from "./OurTeam/OurTeam";
import SecondStatistics from "./SecondStatistics/SecondStatistics";
import Statistics from "./Statistics/Statistics";
import VideoComponent from "./VideoComponent/VideoComponent";

function Main() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    return (
      <div className="loading--block">
        <CircularProgress color="error" />
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <VideoComponent />
      <Statistics />
      <Choose />
      <OurServices />
      <OurTeam />
      <SecondStatistics />
      <News />
    </div>
  );
}

export default Main;
