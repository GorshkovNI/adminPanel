import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sumTo: '',
  sumFrom: '',
  dateTo: '',
  dateFrom: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setAction(state, { payload: { key, value } }) {
      //Общий для сумм и дат
      state[key] = value;
    },
  },
});

export const { setAction } = filterSlice.actions;
export default filterSlice.reducer;
