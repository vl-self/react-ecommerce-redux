import ProductCard from "../../productcard/ProductCard";
import styles from "./beauty.module.css";
const beautyProds = [
  {
    imgSrc: "../../src/assets/product-item1.jpg",
    btnText: "",
  },
  {
    imgSrc: "../../src/assets/product-item2.jpg",
    btnText: "",
  },
  {
    imgSrc: "../../src/assets/product-item3.jpg",
    btnText: "",
  },
  {
    imgSrc: "../../src/assets/product-item4.jpg",
    btnText: "",
  },
];
const Beauty = () => {
  return (
    <section id="beauty" className="text-center">
      {/* <h2 className='mt-[1.5rem] mb-[4rem] relative before:absolute before:top-[30px] before:items-center before:left-[3px] before:w-[25%] before:content-[""] border-b border-gray-950/5'> */}
      <h2 className={`mt-[1.5rem] mb-[4rem] relative ${styles.section_title}`}>
        Beauty Products
      </h2>
      <div className="flex justify-between">
        {beautyProds.map((item, index) => {
          return <ProductCard key={index} item={item}></ProductCard>;
        })}
      </div>
    </section>
  );
};

export default Beauty;
