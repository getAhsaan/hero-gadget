import { getStoredCart } from "./utils/fakeDB";

export const productAndCartData = async () => {
  const pData = await fetch("products.json");
  const products = await pData.json();
  const savedCart = getStoredCart();
  let cartData = [];

  for (const id in savedCart) {
    const foundCart = products.find((product) => product.id === id);
    if (foundCart) {
      foundCart.quantity = savedCart[id];
      cartData.push(foundCart);
    }
  }
  return { cartData, products };
};
