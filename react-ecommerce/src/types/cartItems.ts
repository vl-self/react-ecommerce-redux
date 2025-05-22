export type CartData = {
  id: number;
  products: CartItem[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};
export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
};

export type CartState = {
  cartData: CartData;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};
