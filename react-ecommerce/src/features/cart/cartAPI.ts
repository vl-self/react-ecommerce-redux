import type { CartItem } from "../../types/cartItems";

const BASE_URL = "https://dummyjson.com/carts";
const USER_ID = 1;

export const fetchCartAPI = async () => {
  const response = await fetch(`${BASE_URL}/${USER_ID}`);
  return await response.json();
};

export const addCartAPI = async (item: { id: number; quantity: number }) => {
  const response = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: USER_ID,
      products: [
        {
          id: item.id,
          quantity: item.quantity,
        },
      ],
    }),
  });
  return await response.json();
};

export const updateCartAPI = async (item: CartItem) => {
  const response = await fetch(`${BASE_URL}/${USER_ID}`, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      merge: true, // this will include existing products in the cart
      products: [
        {
          id: item.id,
          quantity: item.quantity,
        },
      ],
    }),
  });
  return await response.json();
};
