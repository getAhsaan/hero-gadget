import React, { useEffect, useState } from "react";
import { getStoredCart } from "../utils/fakeDB";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const pData = useLoaderData();
  useEffect(() => {
    const savedCart = getStoredCart();
    let cartData = [];
    for (const id in savedCart) {
      const foundCart = pData.find((product) => product.id === id);
      if (foundCart) {
        foundCart.quantity = savedCart[id];
        cartData.push(foundCart);
      }
    }
    setCart(cartData);
  }, []);
  console.log(cart);

  return <div>cart</div>;
};

export default Cart;
