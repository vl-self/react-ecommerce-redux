import { useCartItemContext } from "../../hooks/CartContext";
import { usePriceHook } from "../../hooks/usePriceHook";

const OrderSummary = () => {
  const cartData = useCartItemContext();
  let sum = 0;
  if (cartData?.cartItems?.length) {
    sum = cartData.cartItems.reduce((accumulator, item) => {
      const { totalAmount } = usePriceHook(item);
      return accumulator + totalAmount;
    }, 0);
    console.log("sum", sum);
  }

  return (
    <div className="leading-[2rem]">
      <h5 className="my-[10px]">Order Summary</h5>
      <div>Total Items Count : {cartData.cartItems?.length}</div>
      <div>Total Amount : ${sum}</div>
    </div>
  );
};

export default OrderSummary;
