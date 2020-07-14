import React from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "./actions";

function Product({ item }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    console.log("adding item..", item.id);
    dispatch(add(item.id));
  };

  const handleRemove = () => {
    console.log("removing item..", item.id);
    dispatch(remove(item.id));
  };

  return (
    <>
      <li>
        <p>{item.details.name}</p>
        <p>{item.details.price}</p>
        <p>{item.details.description}</p>
        <img width="150px" src={item.details.image_url} alt={item.details.name} />
        <button onClick={handleAdd}>Add to cart</button>
        <button onClick={handleRemove}>Remove from cart</button>
      </li>
      <br/>
    </>
  );
}

export default Product;