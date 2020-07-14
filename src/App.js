import React from 'react';
import ProductsList from './ProductsList';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import CartCounter from "./CartCounter";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <CartCounter />
      <ProductsList />
    </Provider>
  );
}

export default App;
