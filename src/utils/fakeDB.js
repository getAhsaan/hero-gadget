// add data to local storage
const addToDB = (id) => {
  let shoppingCart = {};

  // get previous data from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  //   set data to local storage
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// get storedCart data
const getStoredCart = () => {
  let shoppingCart = {};

  // get previous data from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

// Remove a specific element from local storage
const removeFromDB = (id) => {
  // get specific data from localStorage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

// remove shopping cart from local storage
const deleteCartFromDB = () => localStorage.removeItem("shopping-cart");

export { addToDB, getStoredCart, removeFromDB, deleteCartFromDB };
