import * as data from './data.json';
import * as t from './actionTypes';

let inventory = [];

for (let product in data.products) {
  inventory.push({ id: product, details: data.products[product] });
}

// cart [{id:, quantity:}, {id:, quantity:},....]
const INITIAL_STATE = { inventory, cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  let copiedCart, foundProduct, prodId;
  switch (action.type) {
    case t.ADD_TO_CART:
      copiedCart = state.cart.slice();
      prodId = action.payload.id;

      foundProduct = copiedCart.filter((product) => product.id === prodId);

      if (foundProduct.length > 0) {
        foundProduct[0].quantity = foundProduct[0].quantity + 1;
      } else {
        copiedCart.push({ ...action.payload, quantity: 1 });
      }
      return { ...state, cart: copiedCart };
    case t.REMOVE_FROM_CART:
      // only want to remove one of the same item.
      copiedCart = state.cart.slice();
      prodId = action.payload;
      foundProduct = copiedCart.filter((product) => product.id === prodId);

      if (foundProduct.length > 0) {
        if (foundProduct[0].quantity > 1) {
          foundProduct[0].quantity = foundProduct[0].quantity - 1;
        } else {
          copiedCart = copiedCart.filter((product) => product.id !== prodId);
        }
      }
      // will remove all of the same item:
      //      let filteredCart = state.cart.filter(id => id !== action.payload);
      return { ...state, cart: copiedCart };
    default:
      return state;
  }
}

export default rootReducer;
