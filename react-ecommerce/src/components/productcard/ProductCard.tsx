type itemDetails = {
  item: {
    imgSrc: string;
    btnText: string;
  };
};
const ProductCard: React.FC<itemDetails> = ({ item }) => {
  return (
    <div className="bg-[#EFEEE8] p-[2rem] m-[2rem] relative group overflow-hidden min-w-[200px] min-h-[200px]">
      <img src={item.imgSrc}></img>
      <button className="uppercase absolute bottom-[-40px] left-[0px] p-[0.5rem] text-black w-full rounded-none group-hover:bottom-[0px]">
        {item.btnText ? item.btnText : "Add To Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
