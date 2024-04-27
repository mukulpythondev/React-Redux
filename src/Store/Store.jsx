import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './reducers/UserSlice'; 
import  productsReducer  from './reducers/ProductSlice';

export const store = configureStore({
  reducer: {
    usersReducer: usersReducer,
    productsReducer: productsReducer
  },
});
