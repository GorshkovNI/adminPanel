import { createSlice } from '@reduxjs/toolkit';
import { CLIENTS } from '../../context/Clients';

const initialState = {
  orders: CLIENTS,
  selectedIds: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    deleteOrders(state, action) {
      const id = action.payload;
      state.orders = state.orders.filter((order) => !id.includes(order.id));
    },

    setPageIdOrder(state, action) {
      const arrId = action.payload;
      if (state.selectedIds.toString() === arrId.toString()) {
        state.selectedIds.length = 0;
      } else {
        state.selectedIds = [...arrId];
      }
    },

    setIdOrders(state, action) {
      const id = action.payload;
      state.selectedIds = state.selectedIds.includes(id)
        ? state.selectedIds.filter((item) => item !== id)
        : [...state.selectedIds, id];
    },

    cleanSelectedId(state) {
      state.selectedIds.length = 0;
    },

    changeStatus(state, { payload: { status } }) {
      if (state.selectedIds.length === 0) return;
      state.orders.forEach((current) => {
        if (state.selectedIds.includes(current.id)) {
          current.status = status;
          return;
        }
      });
    },

    setNewName(state, action) {
      const id = action.payload.currentId;
      const name = action.payload.fioData;
      const status = action.payload.statusData;
      state.orders.forEach((current) => {
        if (current.id === id) {
          current.customer = name;
          current.status = status;
          return;
        }
      });
    },
  },
});
export const {
  deleteOrders,
  setIdOrders,
  changeStatus,
  cleanSelectedId,
  setNewName,
  setPageIdOrder,
  setAllPostOnPageSelected,
} = orderSlice.actions;
export default orderSlice.reducer;
