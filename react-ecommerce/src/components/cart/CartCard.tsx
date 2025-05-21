import {
  faHeart,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { CartItem } from "../../types/cartItems";
import { usePriceHook } from "../../hooks/usePriceHook";
import styles from "./cart.module.css";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../features/cart/cartSlice";

const CartCard = ({ cartItem }: { cartItem: CartItem }) => {
  const cartDispatch = useDispatch();

  const { priceAmount, discountAmount, saleAmount, totalAmount } =
    usePriceHook(cartItem);

  const removeCartItem = () => {
    cartDispatch(removeFromCart(cartItem.id));
  };

  const addToWishList = () => {};

  const increaseQunatity = () => {
    cartDispatch(
      updateQuantity({ id: cartItem.id, quantity: cartItem.quantity + 1 })
    );
  };
  const decreaseQunatity = () => {
    cartDispatch(
      updateQuantity({ id: cartItem.id, quantity: cartItem.quantity - 1 })
    );
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
              disabled={cartItem.quantity >= 10}
              onClick={increaseQunatity}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <span>{cartItem.quantity}</span>
            <button
              className={`${styles.cartButton}`}
              role="button"
              disabled={cartItem.quantity <= 1}
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
