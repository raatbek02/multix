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
  ADMIN,
  ADMIN_ABOUT,
  ADMIN_CONSULTANT,
  ADMIN_CONTACT,
  ADMIN_INFO,
  ADMIN_NEWS,
  ADMIN_SERVICE,
  ADMIN_TEAM,
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
import Admin from "./pages/Admin/Admin";
import AdminTeam from "./pages/Admin/AdminTeam/AdminTeam";
import AdminNews from "./pages/Admin/AdminNews/AdminNews";
import AdminConsultant from "./pages/Admin/AdminConsultant/AdminConsultant";
import AdminContact from "./pages/Admin/AdminContact/AdminContact";
import AdminAbout from "./pages/Admin/AdminAbout/AdminAbout";
import AdminService from "./pages/Admin/AdminService/AdminService";
import AdminInfo from "./pages/Admin/AdminInfo/AdminInfo";

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

// export const privateRoutes = [
//   {
//     path: ADMIN,
//     Component: <Admin />,
//   },
// ];

export const adminRoutes = [
  {
    path: ADMIN_TEAM,
    Component: <AdminTeam />,
  },
  {
    path: ADMIN_NEWS,
    Component: <AdminNews />,
  },
  {
    path: ADMIN_CONSULTANT,
    Component: <AdminConsultant />,
  },
  {
    path: ADMIN_SERVICE,
    Component: <AdminService />,
  },
  {
    path: ADMIN_ABOUT,
    Component: <AdminAbout />,
  },
  {
    path: ADMIN_CONTACT,
    Component: <AdminContact />,
  },
  {
    path: ADMIN_INFO,
    Component: <AdminInfo />,
  },
];
