import About from "./pages/About/About";
import Consultant from "./pages/Consultant/Consultant";
import ConsultantDetail from "./pages/ConsultantDetail/ConsultantDetail";
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
  OURSERVICESPAGE,
  TEAMDETAIL,
  TEAMPAGE,
} from "./utils/consts";

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
  { path: CONTACTPAGE, Component: <ContactPage /> },
];
