import { createBrowserRouter } from "react-router";
import App from "./App";
import ProductList from "./components/productlist/ProductList";
import Home from "./components/home/Home";
import InfiniteProductsList from "./components/infiniteproductlist/InfiniteProductsList";
import CartPage from "./components/cart/CartPage";

const routerObj = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "/prodlist",
        Component: ProductList,
        // Component: InfiniteProductsList,
      },
      {
        path: "/cart",
        Component: CartPage,
      },
    ],
  },
]);

export default routerObj;
