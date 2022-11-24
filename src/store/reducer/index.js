import { combineReducers } from '@reduxjs/toolkit';
import filter from '../slice/filterSlice';
import orders from '../slice/ordersSlice';

const reducer = combineReducers({
  filter,
  orders,
});

export default reducer;
