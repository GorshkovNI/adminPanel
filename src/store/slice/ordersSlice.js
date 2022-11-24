import { createSlice } from '@reduxjs/toolkit';
import { CLIENTS } from '../../context/Clients';

const initialState = {
  orders: CLIENTS,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
