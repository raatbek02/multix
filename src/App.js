import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { $host } from "./http";
import { setNewsData } from "./store/news_store";
import { setServiceData } from "./store/service_store";
import { setTeamData } from "./store/team_store";

function App() {
  const dispatch = useDispatch();

  const getData = async () => {
    await $host.get(`en/api/team/`).then(({ data }) => {
      dispatch(setTeamData(data));
    });
    await $host.get(`en/api/service/`).then(({ data }) => {
      dispatch(setServiceData(data));
    });
    await $host.get(`en/api/news/`).then(({ data }) => {
      dispatch(setNewsData(data));
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
