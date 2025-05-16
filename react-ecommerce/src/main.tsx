import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import routerObj from "./router.ts";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <RouterProvider router={routerObj}></RouterProvider>
  // </StrictMode>
  <RouterProvider router={routerObj}></RouterProvider>
);
