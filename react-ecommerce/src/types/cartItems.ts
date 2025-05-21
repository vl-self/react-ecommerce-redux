import type { ProductItem } from "./product";

export interface CartItem extends ProductItem {
  quantity: number;
}
export type CartState = {
  cartItems: CartItem[];
  cartCount: number;
};
export type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: CartItem }
  | { type: "DECREASE_QUANTITY"; payload: CartItem }
  | { type: "INCREASE_QUANTITY"; payload: CartItem }
  | { type: "CLEAR_CART" };
