import React from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "./actions";

function Product({ item }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add(item.id));
  };

  const handleRemove = () => {
    dispatch(remove(item.id));
  };

  const { name, price, description, image_url } = item.details;
  
  return (
    <>
      <li>
        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
        <img width="150px" src={image_url} alt={name} />
        <button onClick={handleAdd}>Add to cart</button>
        <button onClick={handleRemove}>Remove from cart</button>
      </li>
      <br/>
    </>
  );
}

export default Product;