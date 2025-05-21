import { useSelector } from "react-redux";
import { useCartItemContext } from "../../hooks/CartContext";
import { usePriceHook } from "../../hooks/usePriceHook";
import type { RootState } from "../../store/store";

const OrderSummary = () => {
  const cartData = useSelector((state: RootState) => state.cart.cartItems);
  let sum = 0;
  if (cartData?.length) {
    sum = cartData.reduce((accumulator, item) => {
      const { totalAmount } = usePriceHook(item);
      return accumulator + totalAmount;
    }, 0);
    sum = Number(sum.toFixed(2));
    console.log("sum", sum);
  }

  return (
    <div className="leading-[2rem]">
      <h5 className="my-[10px]">Order Summary</h5>
      <div>Total Items Count : {cartData?.length}</div>
      <div>Total Amount : ${sum}</div>
    </div>
  );
};

export default OrderSummary;
