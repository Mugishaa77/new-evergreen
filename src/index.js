import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import reportWebVitals from './reportWebVitals';
import productReducer from './features/productsSlice';
import { productsFetch } from './features/productsSlice';
import { productsApi } from './features/productsApi';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import basketReducer, { getTotals } from './features/basketSlice';
import authReducer from './features/authSlice';

import { loadUser, logoutUser } from './features/authSlice';


const store = configureStore({
  reducer: {
    products: productReducer,
    basket: basketReducer,
    auth: authReducer,
    [productsApi.reducerPath] : productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware),
  
});



store.dispatch(productsFetch());
store.dispatch(getTotals());
store.dispatch(loadUser(null));
store.dispatch(logoutUser());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
