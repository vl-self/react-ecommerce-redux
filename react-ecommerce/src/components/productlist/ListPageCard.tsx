import { addToCart } from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../store/store";
import type { ProductItem } from "../../types/product";

type ProductCardProps = {
  prd: ProductItem;
};

const ListPageCard: React.FC<ProductCardProps> = ({ prd }) => {
  const cartDispatch = useAppDispatch();

  const AddToCart = (prd: ProductItem): void => {
    const payload = { id: prd.id, quantity: 1 };
    // Add item of dummyjosn only return the currrent added item in the response so cartData will get changed accordingly... so after adding another item still cart count will appear as 1
    cartDispatch(addToCart(payload));
  };

  return (
    <div
      className="bg-[#EFEEE8] p-[2rem] relative group overflow-hidden"
      key={prd?.id}
    >
      <figure className="min-w-[186px] min-h-[186px]">
        <img src={prd.thumbnail} className="w-full" alt="Loading.."></img>
        <button
          className="uppercase absolute bottom-[-40px] left-[0px] p-[0.5rem] text-black w-full rounded-none group-hover:bottom-[0px]"
          onClick={() => {
            AddToCart(prd);
          }}
        >
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
