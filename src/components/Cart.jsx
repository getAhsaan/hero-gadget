import React from "react";
import { getStoredCart } from "../utils/fakeDB";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const pData = useLoaderData();
  const savedCart = getStoredCart();
  let cart = [];
  for (const id in savedCart) {
    const foundCart = pData.find((product) => product.id === id);
    if (foundCart) {
        foundCart.quantity = savedCart[id];
      cart.push(foundCart);
    }
  }
  return <div>cart</div>;
};

export default Cart;
