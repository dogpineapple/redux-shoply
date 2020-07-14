import React from 'react';
// import { useParams, useHistory, Redirect } from 'react-router-dom';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from './actions';

function ProductDetails() {
  const { id } = useParams();
  // const history = useHistory();

  const dispatch = useDispatch();

  const inventory = useSelector((store) => store.inventory);

  const filteredProducts = inventory.filter((product) => id === product.id);

  // CODE REVIEW QUESTIONS
  if (filteredProducts.length === 0) {
    console.log('WHERE ARE WE...');
    // history.push('/');
    // return null;
    return <Redirect to='/' />;
  }

  const { name, price, description, image_url } = filteredProducts[0].details;

  const handleAdd = () => {
    dispatch(add(id));
  };

  const handleRemove = () => {
    dispatch(remove(id));
  };

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
      <img src={image_url} alt={name} width='300px' />
      <button onClick={handleAdd}>Add to cart</button>
      <button onClick={handleRemove}>Remove to cart</button>
    </div>
  );
}

export default ProductDetails;
