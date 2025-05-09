import { createBrowserRouter } from "react-router";
import App from "./App";

const routerObj = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);

export default routerObj;
