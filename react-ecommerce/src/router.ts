import { createBrowserRouter } from "react-router";
import App from "./App";
import ProductList from "./components/productlist/ProductList";
import Home from "./components/home/Home";

const routerObj = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "/prodlist",
        Component: ProductList,
      },
    ],
  },
]);

export default routerObj;
