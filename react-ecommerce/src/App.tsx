import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="px-[6rem]">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </Provider>
  );
}
// https://dummyjson.com/products
// https://fakestoreapi.com/products

export default App;
