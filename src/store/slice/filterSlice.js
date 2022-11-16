import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sumTo: '',
  sumFrom: '',
  dateTo: '',
  dateFrom: '',
  select: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    //Общий для сумм и дат
    setAction(state, { payload: { key, value } }) {
      state[key] = value;
    },

    setSelected(state, action) {
      const label = action.payload;
      state.select.push(
        !state.select.includes(label)
          ? [...state.select, label]
          : state.select.filter((item) => item !== label)
      );
    },
  },
});

export const { setAction, setSelected } = filterSlice.actions;
export default filterSlice.reducer;
