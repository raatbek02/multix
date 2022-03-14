import About from "./pages/About/About";
import Consultant from "./pages/Consultant/Consultant";
import ConsultantDetail from "./pages/ConsultantDetail/ConsultantDetail";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage/NewsPage";
import OurServicesPage from "./pages/OurServicesPage/OurServicesPage";
import TeamDetail from "./pages/TeamDetail/TeamDetail";
import TeamPage from "./pages/TeamPage/TeamPage";
import {
  ABOUT,
  CONSULTANT,
  CONSULTANT_DETAIL,
  CONTACTPAGE,
  HOME_ROUTES,
  NEWSPAGE,
  NEWS_DETAIL,
  OURSERVICESPAGE,
  SEARCH_ROUTE,
  SERVICE_DETAIL,
  TEAMDETAIL,
  TEAMPAGE,
} from "./utils/consts";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Search from "./pages/Search/Search";

export const publicRoutes = [
  { path: HOME_ROUTES, Component: <Home /> },
  { path: OURSERVICESPAGE, Component: <OurServicesPage /> },
  { path: ABOUT, Component: <About /> },
  { path: TEAMPAGE, Component: <TeamPage /> },
  { path: NEWSPAGE, Component: <NewsPage /> },
  //   { path: TEAMDETAIL + "/:id", Component: <TeamDetail /> },
  { path: TEAMDETAIL + "/:id", Component: <TeamDetail /> },
  { path: CONSULTANT, Component: <Consultant /> },
  { path: CONSULTANT_DETAIL + "/:id", Component: <ConsultantDetail /> },
  { path: NEWS_DETAIL + "/:id", Component: <NewsDetail /> },
  { path: SERVICE_DETAIL + "/:id", Component: <ServiceDetail /> },
  { path: SEARCH_ROUTE, Component: <Search /> },

  { path: CONTACTPAGE, Component: <ContactPage /> },
];
