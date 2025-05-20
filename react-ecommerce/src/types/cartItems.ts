import type { productInterFace } from "./product";

export interface cartItem extends productInterFace {
  quantity: number;
}
export type CartState = {
  cartItems: cartItem[];
  cartCount: number;
};
export type CartAction =
  | { type: "ADD_TO_CART"; payload: productInterFace }
  | { type: "REMOVE_FROM_CART"; payload: productInterFace }
  | { type: "DECREASE_QUANTITY"; payload: productInterFace }
  | { type: "CLEAR_CART" };
