import Beauty from "./beauty/Beauty";
import Contact from "./contact/Contact";
import Banner from "./banner/Banner";
import { Articles } from "./articles/Articles";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Articles></Articles>
      <Beauty></Beauty>
      <Contact></Contact>
    </main>
  );
};

export default Home;
