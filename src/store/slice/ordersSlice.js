import { createSlice } from '@reduxjs/toolkit';
import { CLIENTS } from '../../context/Clients';

const initialState = {
  orders: CLIENTS,
  selectedId: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    deleteOrders(state, action) {
      const id = action.payload;
      state.orders = state.orders.filter((order) => !id.includes(order.id));
    },

    setIdOrders(state, action) {
      const id = action.payload;
      state.selectedId = state.selectedId.includes(id)
        ? state.selectedId.filter((item) => item !== id)
        : [...state.selectedId, id];
    },

    cleanSelectedId(state) {
      state.selectedId.length = 0;
    },

    changeStatus(state, { payload: { status } }) {
      if (state.selectedId.length === 0) return;
      state.orders.forEach((current) => {
        if (state.selectedId.includes(current.id)) {
          current.status = status;
          return;
        }
      });
    },
  },
});
export const { deleteOrders, changeStatus, setIdOrders, cleanSelectedId } =
  orderSlice.actions;
export default orderSlice.reducer;
