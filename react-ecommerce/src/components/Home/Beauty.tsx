import styles from "./beauty.module.css";
const Beauty = () => {
  return (
    <section id="beauty" className="text-center">
      {/* <h2 className='mt-[1.5rem] mb-[4rem] relative before:absolute before:top-[30px] before:items-center before:left-[3px] before:w-[25%] before:content-[""] border-b border-gray-950/5'> */}
      <h2 className={`mt-[1.5rem] mb-[4rem] relative ${styles.section_title}`}>
        Beauty Products
      </h2>
      <div className="flex justify-between">
        <div className="bg-[#EFEEE8] p-[2rem] relative group overflow-hidden">
          <img src="../../src/assets/product-item1.jpg"></img>
          <button className="uppercase absolute bottom-[-40px] left-[0px] p-[0.5rem] text-black w-full rounded-none group-hover:bottom-[0px]">
            Add To Cart
          </button>
        </div>
        <div className="bg-[#EFEEE8] p-[2rem] relative group overflow-hidden">
          <img src="../../src/assets/product-item2.jpg"></img>
          <button className="uppercase absolute bottom-[-40px] left-[0px] p-[0.5rem] text-black w-full rounded-none group-hover:bottom-[0px]">
            Add To Cart
          </button>
        </div>
        <div className="bg-[#EFEEE8] p-[2rem] relative group overflow-hidden">
          <img src="../../src/assets/product-item3.jpg"></img>
          <button className="uppercase absolute bottom-[-40px] left-[0px] p-[0.5rem] text-black w-full rounded-none group-hover:bottom-[0px]">
            Add To Cart
          </button>
        </div>
        <div className="bg-[#EFEEE8] p-[2rem] relative group overflow-hidden">
          <img src="../../src/assets/product-item4.jpg"></img>
          <button className="uppercase absolute bottom-[-40px] left-[0px] p-[0.5rem] text-black w-full rounded-none group-hover:bottom-[0px]">
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Beauty;
