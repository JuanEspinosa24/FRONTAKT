import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import axios from "axios";
import store from "./redux/store";
//Pagina de error
import ErrorPage from "./pages/Error-page";
import { SignUp } from "./pages/SignUp";
import { MyNavbar } from "./components/Inicio/MyNavbar";
import { Dashboard } from "./pages/Dashboard";
import { Chat } from "./pages/Chat";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Login } from "./pages/Login";
import { SetAvatar } from "./pages/SetAvatar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MyNavbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Inicio />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path:"/login",
        element:<Login/>
      }
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path:"setAvatar",
    element:<SetAvatar/>
  }
]);

axios.defaults.baseURL = "https://backmesa.onrender.com/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router} />
  </Provider>
);
