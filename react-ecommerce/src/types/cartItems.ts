import type { ProductItem } from "./product";

export interface CartItem extends ProductItem {
  quantity: number;
}
export type CartState = {
  cartItems: CartItem[];
  cartCount: number;
};
export type CartAction =
  | { type: "ADD_TO_CART"; payload: ProductItem }
  | { type: "REMOVE_FROM_CART"; payload: ProductItem }
  | { type: "DECREASE_QUANTITY"; payload: ProductItem }
  | { type: "CLEAR_CART" };
