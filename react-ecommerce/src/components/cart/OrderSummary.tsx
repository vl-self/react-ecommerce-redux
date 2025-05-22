import { useAppSelector } from "../../store/store";

const OrderSummary = () => {
  const { cartData } = useAppSelector((state) => state.cart);

  return (
    <div className="leading-[2rem]">
      <h5 className="my-[10px]">Order Summary</h5>
      <div>
        Total Items : {cartData.totalProducts} items of quantity{" "}
        {cartData.totalQuantity}
      </div>
      <div>Total Amount After Discount : {cartData.discountedTotal}</div>
    </div>
  );
};

export default OrderSummary;
