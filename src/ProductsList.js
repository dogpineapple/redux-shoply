import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import './Product.css';

function ProductsList() {
  // state with an array of products , use redux
  const inventory = useSelector((store) => store.inventory);

  return (
    <ul>
      A products list..
      {inventory.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ProductsList;
