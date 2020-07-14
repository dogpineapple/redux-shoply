import * as t from './actionTypes';

export function add(prodData) {
  return {
    type: t.ADD_TO_CART,
    payload: prodData,
  };
}

export function remove(id) {
  return {
    type: t.REMOVE_FROM_CART,
    payload: id,
  };
}
