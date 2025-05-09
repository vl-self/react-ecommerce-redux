import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Beauty from "./components/Home/Beauty";
import Contact from "./components/Home/Contact";
import Banner from "./components/Banner/Banner";
import { Articles } from "./components/Articles/Articles";

function App() {
  return (
    <div className="px-[6rem]">
      <Header></Header>
      <Banner></Banner>
      <Articles></Articles>
      <Beauty></Beauty>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
// https://dummyjson.com/products
// https://fakestoreapi.com/products

export default App;
