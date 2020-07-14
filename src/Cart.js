import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Product from './Product';

function Cart() {
  // shallowEqual doesn't render if quantity changed
  // fix the rootReducer and add shallowEqual back
  const products = useSelector((store) => store.cart);
  console.log('RENDERING CART...');

  return (
    <div>
      {products.map((product) => (
        <div>
          <Product key={product.id} item={product} />
          <p>
            <b>Quantities of this product: {product.quantity}</b>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
