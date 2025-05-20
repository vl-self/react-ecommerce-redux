import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import { Outlet } from "react-router";
import { CartProvider } from "./hooks/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="px-[6rem]">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </CartProvider>
  );
}
// https://dummyjson.com/products
// https://fakestoreapi.com/products

export default App;
