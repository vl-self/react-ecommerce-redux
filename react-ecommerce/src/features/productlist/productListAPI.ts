export const fetchProductsAPI = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return await res.json();
};
