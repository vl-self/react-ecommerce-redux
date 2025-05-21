import type { CartItem } from "../types/cartItems";
import type { prdPriceDetails } from "../types/price";

export function usePriceHook(cartItem: CartItem): prdPriceDetails {
  const { price, discountPercentage, quantity } = { ...cartItem };

  let priceAmount = Number(price.toFixed(2));
  let discountAmount = Number((price * (discountPercentage / 100)).toFixed(2));
  let saleAmount = priceAmount - discountAmount;
  let totalAmount = Number((saleAmount * quantity).toFixed(2));

  return {
    priceAmount,
    discountAmount,
    saleAmount,
    totalAmount,
  };
}
