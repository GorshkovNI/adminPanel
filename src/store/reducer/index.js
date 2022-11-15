import { combineReducers } from '@reduxjs/toolkit';
import filter from '../slice/filterSlice';

const reducer = combineReducers({
  filter,
});

export default reducer;
