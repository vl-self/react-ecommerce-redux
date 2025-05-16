import type { productInterFace } from "../../types/product";

type ProductCardProps = {
  prd: productInterFace;
};

const ListPageCard: React.FC<ProductCardProps> = ({ prd }) => {
  return (
    <div className="bg-[#EFEEE8] p-[2rem] relative group overflow-hidden">
      <figure className="min-w-[186px] min-h-[186px]">
        <img src={prd.thumbnail} className="w-full" alt="Loading.."></img>
        <button className="uppercase absolute bottom-[-40px] left-[0px] p-[0.5rem] text-black w-full rounded-none group-hover:bottom-[0px]">
          Add To Cart
        </button>
      </figure>
      <figcaption>
        <h5 className="text-[#74642F]">{prd.title}</h5>
        <div className="p-[1rem_0]">
          <span>{prd.availabilityStatus}</span>
          <span className="float-right">${prd.price}</span>
        </div>
      </figcaption>
    </div>
  );
};

export default ListPageCard;
