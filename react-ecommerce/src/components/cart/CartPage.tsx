import { useCartItemContext } from "../../hooks/CartContext";
import CartCard from "./CartCard";
import OrderSummary from "./OrderSummary";

const CartPage = () => {
  const cartData = useCartItemContext();
  const hasCartItems = cartData.cartItems.length > 0;
  return (
    <section className="py-[3.5rem] ">
      <h3 className="mb-[30px]">Shopping Cart</h3>
      <div className="border border-[var(--site-border-color)] p-[30px]">
        <div className="grid grid-cols-7 grid-flow-col gap-[2rem]">
          <div className="col-span-5">
            {hasCartItems &&
              cartData.cartItems.map((cartItem) => {
                return <CartCard cartItem={cartItem}></CartCard>;
              })}
            {!hasCartItems && (
              <div className="flex items-center justify-center w-full h-full">
                <h5>No Items Added to Cart</h5>
              </div>
            )}
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
