import * as t from "./actionTypes";

export function add(id) {
  return {
    type: t.ADD_TO_CART,
    payload: id
  };
}

export function remove(id) {
  return {
    type: t.REMOVE_FROM_CART,
    payload: id
  };
}