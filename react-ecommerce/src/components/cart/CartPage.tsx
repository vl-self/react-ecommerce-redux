import { fetchCart } from "../../features/cart/cartSlice";
import { useEffect } from "react";
import type { CartItem } from "../../types/cartItems";
import CartCard from "./CartCard";
import OrderSummary from "./OrderSummary";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Spinner from "../spinner/Spinner";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const { cartData, status } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <section className="py-[3.5rem] ">
      <h3 className="mb-[30px]">Shopping Cart</h3>
      <div className="border border-[var(--site-border-color)] p-[30px]">
        <div className="grid grid-cols-7 grid-flow-col gap-[2rem]">
          <div className="col-span-5">
            {status == "succeeded" &&
              (cartData.products.length > 0 ? (
                cartData.products.map((cartItem: CartItem) => {
                  return (
                    <CartCard key={cartItem.id} cartItem={cartItem}></CartCard>
                  );
                })
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <h5>No Items Added to Cart</h5>
                </div>
              ))}
            {status == "loading" && <Spinner></Spinner>}
          </div>
          <div className="col-span-2 bg-[#EFEEE8] border border-[var(--site-border-color)] p-[30px] shadow-sm rounded-lg">
            <OrderSummary></OrderSummary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
