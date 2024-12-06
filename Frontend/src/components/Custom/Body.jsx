import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "../../App";
import Dashboard from "./Dashboard/Dashboard";
import LoginSignup from "./LoginSignup";

const Body = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/auth",
      element: <LoginSignup />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
};

export default Body;
