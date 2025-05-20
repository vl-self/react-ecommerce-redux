import type { CartAction, CartState, CartItem } from "../types/cartItems";

const getCartCount = (cartItems: CartItem[] | []): number => {
  return cartItems.length;
};

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updated = [...state.cartItems, { ...action.payload, quantity: 1 }];
      return { cartItems: updated, cartCount: getCartCount(updated) };
    }
    case "DECREASE_QUANTITY": {
      const updated = state.cartItems
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return { cartItems: updated, cartCount: getCartCount(updated) };
    }
    case "REMOVE_FROM_CART": {
      const updated = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return { cartItems: updated, cartCount: getCartCount(updated) };
    }
    case "CLEAR_CART": {
      return { cartItems: [], cartCount: getCartCount(state.cartItems) };
    }
    default: {
      console.log("initial state", state);
      return {
        cartItems: state.cartItems,
        cartCount: getCartCount(state.cartItems),
      };
    }
  }
};
