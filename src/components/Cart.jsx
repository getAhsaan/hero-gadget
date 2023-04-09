import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const {cartData, products} = useLoaderData();
  
  console.log(cartData, products);

  return <div>cart</div>;
};

export default Cart;
