import * as data from './data.json';
import * as t from "./actionTypes";

let inventory = [];

for (let product in data.products) {
  inventory.push({ id: product, details: data.products[product] });
};

const INITIAL_STATE = { inventory, cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.ADD_TO_CART:
      return {...state, cart: [...state.cart, action.payload]};
    case t.REMOVE_FROM_CART:
      // only want to remove one of the same item.
      let copiedCart = state.cart.slice();
      let idxToDelete = copiedCart.indexOf(action.payload);
      copiedCart.splice(idxToDelete, 1);
      // will remove all of the same item: 
      //      let filteredCart = state.cart.filter(id => id !== action.payload);
      return {...state, cart: copiedCart};
    default:
      return state;
  }
}

export default rootReducer;

