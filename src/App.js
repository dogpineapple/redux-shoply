import React from 'react';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import CartCounter from './CartCounter';
import Cart from './Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CartCounter />
        <Switch>
          <Route exact path='/'>
            <ProductsList />
          </Route>
          <Route exact path='/product/:id'>
            <ProductDetails />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
