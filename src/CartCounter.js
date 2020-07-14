import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartCounter() {
  const cart = useSelector((store) => store.cart);
  // initial value 0 necessary?
  const total = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <div>
      Number of items in cart: {total}
      <br />
      <Link to='/cart'>Go to Cart</Link>
    </div>
  );
}

export default CartCounter;
