import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import JobDetails from "../pages/Job/JobDetails";
import AddJob from "../pages/Job/AddJob";
import MyBids from "../pages/bid/MyBids";
import BidRequest from "../pages/bid/BidRequest";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/Job/MyPostedJobs";
import UpdateJob from "../pages/Job/UpdateJob";
import PrivetRoute from "./PrivetRoute";
import AllJobs from "../pages/Job/AllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allJobs",
        element: <AllJobs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/updateJob/:id",
        element: (
          <PrivetRoute>
            <UpdateJob />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },

      {
        path: "/addJob",
        element: (
          <PrivetRoute>
            <AddJob />,
          </PrivetRoute>
        ),
      },

      {
        path: "/myPostedJob",
        element: (
          <PrivetRoute>
            <MyPostedJobs />
          </PrivetRoute>
        ),
      },
      {
        path: "/myBids",
        element: (
          <PrivetRoute>
            <MyBids />
          </PrivetRoute>
        ),
      },
      {
        path: "/bidRequest",
        element: <BidRequest />,
      },
    ],
  },
]);

export default router;
