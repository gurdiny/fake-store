import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductsPage";
import ProductDatailPage from "./pages/ProductsDatailPage";
import MainLayout from "./layouts/MainLayout";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/productos",
        element: <ProductPage />,
      },
      {
        path: "/productos/:id",
        element: <ProductDatailPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
);
