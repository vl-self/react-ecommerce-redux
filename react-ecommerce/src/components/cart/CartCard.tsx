import {
  faHeart,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { CartItem } from "../../types/cartItems";
import styles from "./cart.module.css";
import { useAppDispatch } from "../../store/store";
import { removeFromCart, updateCart } from "../../features/cart/cartSlice";

const CartCard = ({ cartItem }: { cartItem: CartItem }) => {
  const dispatch = useAppDispatch();

  const removeCartItem = () => {
    // this is a local mutation ... no dummy api available ... so order summary content will not change
    dispatch(removeFromCart(168));
  };

  const addToWishList = () => {};

  // check increase/decrease quntity to one item at a time, since data returned from api is not sync for all products. check docs of https://dummyjson.com/docs/carts#carts-update
  const increaseQunatity = async () => {
    const item = { ...cartItem, quantity: cartItem.quantity + 1 };
    dispatch(updateCart(item));
  };

  const decreaseQunatity = async () => {
    const item = { ...cartItem, quantity: cartItem.quantity - 1 };
    dispatch(updateCart(item));
  };

  return (
    <div className="bg-[#EFEEE8] border border-[var(--site-border-color)] py-[30px] shadow-sm rounded-lg mb-[2rem]">
      <div className="flex gap-4 items-center justify-around">
        <div className="flex-1 text-center">
          <a className="inline-block">
            <img src={cartItem.thumbnail} alt="" className="w-[150px]"></img>
          </a>
        </div>
        <div className="flex-1">
          <h6>{cartItem.title}</h6>
          <div>${cartItem.price}</div>

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
        </div>
        <div className="my-[1rem] flex-1">
          <div>
            <span className="line-through font-[300]">${cartItem.price}</span>
            <span className="ml-[1rem] bg-[var(--site-light-theme-text-color)] font-[300] p-[0.3rem]">
              -${cartItem.discountedTotal}
            </span>
          </div>
          <div>${cartItem.total}</div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
