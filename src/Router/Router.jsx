import { createBrowserRouter } from "react-router-dom";

// Home And Main Home4
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";

// All InnerPage
import About from "../Pages/InnerPage/About";
import Room from "../Pages/InnerPage/Room";
import FindRoom from "../Pages/InnerPage/FindRoom";
import RoomDetails from "../Pages/InnerPage/RoomDetails";
import Services from "../Pages/InnerPage/Services";
import ServiceDetails from "../Pages/InnerPage/ServiceDetails";
import Team from "../Pages/InnerPage/Team";
import Pricing from "../Pages/InnerPage/Pricing";
import Blog from "../Pages/InnerPage/Blog";
import BlogDetails from "../Pages/InnerPage/BlogDetails";
import Contact from "../Pages/InnerPage/Contact";
import Appointment from "../Pages/InnerPage/Appointment";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

// Starting React Router.
const router = createBrowserRouter([
  // forth home router
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/room",
        element: <Room />,
      },
      {
        path: "/find_room",
        element: <FindRoom />,
      },
      {
        path: "/room_details",
        element: <RoomDetails />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service_details",
        element: <ServiceDetails />,
      },
      {
        path: "/our_team",
        element: <Team />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog_details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      }
    ],
  },
]);

export default router;
