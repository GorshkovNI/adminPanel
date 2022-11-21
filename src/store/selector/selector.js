import { createSelector } from '@reduxjs/toolkit';
import { CLIENTS } from '../../context/Clients';
import FILTER_TYPE from '../../modules/Header/TableView/OrderConstant/OrderConstant';

export const getFilter = (state) => state.filter;
export const getSelect = (state) => state.filter.select;

export const getClients = createSelector([getFilter], (filters) => {
  const filteredClients = filterSum(CLIENTS, filters);
  return [filteredClients];
});

const intervalSum = (min, max) => {
  return (value) => {
    const sumTo = min ? min : 0;
    const sumFrom = max ? max : Infinity;
    return value >= sumTo && value <= sumFrom;
  };
};

const intervalDate = (min, max) => {
  return (date) => {
    if (!date) return null;
    date = Date.parse(date);
    if (!min && !max) return true;
    if (!min) return date <= max;
    if (!max) return date >= min;
    return date >= min && date <= max;
  };
};

const selectedStatus = (arrayStatus) => {
  return (status) => {
    if (!arrayStatus.length || FILTER_TYPE.length === arrayStatus.length) {
      return true;
    }
    return arrayStatus.includes(status);
  };
};

const filteredNameOrOrder = (nameOrOrder) => {
  return (name, order) => {
    const getValue = Number.isFinite(Number(nameOrOrder))
      ? order.includes(nameOrOrder)
      : name.toLowerCase().includes(nameOrOrder);
    return getValue;
  };
};

const filterSum = (clients, filter) => {
  const sumFilter = intervalSum(filter.sumTo, filter.sumFrom);
  const dateFilter = intervalDate(filter.dateTo, filter.dateFrom);
  const selectedFilter = selectedStatus(filter.select);
  const fno = filteredNameOrOrder(filter.search);

  return clients.filter(({ sum, date, status, customer, orderNumber }) => {
    return [
      sumFilter(parseFloat(sum)),
      dateFilter(date),
      selectedFilter(status),
      fno(customer, orderNumber),
    ].every(Boolean);
  });
};
