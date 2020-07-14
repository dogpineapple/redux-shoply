import React from "react";
import { useSelector } from "react-redux";

function CartCounter() {
  const cart = useSelector(store => store.cart);
  return (
    <div>
      Number of items in cart: {cart.length}
    </div>
  );
}

export default CartCounter;