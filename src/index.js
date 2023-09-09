import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TodoProvider } from "./context/TodoContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Principal } from "./views/Principal";
import { Detail } from "./views/Detail";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />,
  },
  {
    path: "/detalle/:id",
    element: <Detail />,
  },
  {
    path: "/*",
    element: <Principal />,
  },
]);

root.render(
  <TodoProvider>
    <RouterProvider router={router} />
  </TodoProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
