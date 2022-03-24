import { configureStore } from "@reduxjs/toolkit";
import team_store from "./team_store";
import service_store from "./service_store";
import news_store from "./news_store";
import consultant_store from "./consultant_store";
import contact_store from "./contact_store";
import search_store from "./search_store";
import uploadImage from "./uploadImage";
import adminPathName from "./adminPathName";
import about from "./about";
import secondStatistics_store from "./secondStatistics_store";

export default configureStore({
  reducer: {
    team_store,
    service_store,
    news_store,
    contact_store,
    search_store,
    uploadImage,
    consultant_store,
    adminPathName,
    about,
    secondStatistics_store,
  },
});
