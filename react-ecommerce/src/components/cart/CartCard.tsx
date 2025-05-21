import {
  faHeart,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { CartItem } from "../../types/cartItems";
import { useCartDispatchContext } from "../../hooks/CartContext";
import { usePriceHook } from "../../hooks/usePriceHook";
import styles from "./cart.module.css";

const CartCard = ({ cartItem }: { cartItem: CartItem }) => {
  const cartDispatch = useCartDispatchContext();
  const { priceAmount, discountAmount, saleAmount, totalAmount } =
    usePriceHook(cartItem);

  const removeCartItem = () => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: cartItem,
    });
  };

  const addToWishList = () => {};

  const increaseQunatity = () => {
    if (cartItem.quantity >= 10) {
      alert("Maximum quantity is 10");
      return;
    }
    cartDispatch({
      type: "INCREASE_QUANTITY",
      payload: cartItem,
    });
  };
  const decreaseQunatity = () => {
    if (cartItem.quantity <= 1) {
      alert("Minimum quantity is 1");
      return;
    }
    cartDispatch({
      type: "DECREASE_QUANTITY",
      payload: cartItem,
    });
  };

  return (
    <div className="bg-[#EFEEE8] border border-[var(--site-border-color)] py-[30px] shadow-sm rounded-lg mb-[2rem]">
      <div className="flex gap-4 items-center justify-around">
        <div className="flex-1 text-center">
          <a className="inline-block">
            <img src={cartItem.thumbnail} alt="" className="w-[150px]"></img>
          </a>
        </div>
        <div className="flex-2">
          <h6>{cartItem.title}</h6>
          <div>{cartItem.availabilityStatus}</div>
          <div className="my-[1rem]">
            <div>
              <span className="line-through font-[300]">${priceAmount}</span>
              <span className="ml-[1rem] bg-[var(--site-light-theme-text-color)] font-[300] p-[0.3rem]">
                -${discountAmount}
              </span>
            </div>
            <div>${saleAmount}</div>
          </div>
          <div className="flex items-center gap-5 pt-[10px] text-[var(--site-light-theme-text-color)]">
            <span onClick={addToWishList}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span onClick={removeCartItem}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </div>
        </div>
        <div className="flex-1 text-center flex justify-around items-center">
          <div className="flex gap-6 items-center">
            <button
              className={styles.cartButton}
              role="button"
              onClick={increaseQunatity}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <span>{cartItem.quantity}</span>
            <button
              className={`${styles.cartButton}`}
              role="button"
              onClick={decreaseQunatity}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <div>${totalAmount}</div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
