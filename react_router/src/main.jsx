import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layout - main
import Layout from "./Layout.jsx";

// components
import Home from "./components/home/Home.jsx";
import About from "./components/About/About.jsx";
import ContactUs from "./components/Contact/ContantUs.jsx";
import User from "./components/User/User.jsx";
import Github, { exportGithubInfo } from "./components/Github/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        // while accessing this :userId name must be same while using useParams
        path: "user/:userId",
        element: <User />,
      },
      {
        path: "github",
        element: <Github />,
        loader: exportGithubInfo,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
