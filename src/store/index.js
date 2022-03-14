import { configureStore } from "@reduxjs/toolkit";
import team_store from "./team_store";
import service_store from "./service_store";
import news_store from "./news_store";
import contact_store from "./contact_store";
import search_store from "./search_store";

export default configureStore({
  reducer: {
    team_store,
    service_store,
    news_store,
    contact_store,
    search_store,
  },
});
