import { createSelector } from '@reduxjs/toolkit';
import { CLIENTS } from '../../context/Clients';
import { FILTER_TYPE } from '../../modules/Header/TableView/OrderConstant/OrderConstant';

export const getFilter = (state) => state.filter;
export const getSelect = (state) => state.filter.select;
export const getSort = (state) => state.filter.sort;
export const getDirection = (state) => state.filter.direction;

export const getClients = createSelector(
  [getFilter, getSelect, getSort, getDirection],
  (filters) => {
    const filteredClients = filterOrders(CLIENTS, filters);
    const sortedClients = sortedOrders(
      filteredClients,
      filters.sort,
      filters.direction
    );
    return [sortedClients];
  }
);

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

const filterOrders = (clients, filter) => {
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

const sortedOrders = (orders, sort, direction) => {
  return orders.sort((a, b) => {
    if (!direction) {
      if (isFinite(a[sort])) {
        return a[sort] - b[sort];
      }

      if (a[sort] < b[sort]) {
        return -1;
      }

      if (a[sort] > b[sort]) {
        return 1;
      }

      return 0;
    } else {
      if (isFinite(a[sort])) {
        return b[sort] - a[sort];
      }

      if (a[sort] > b[sort]) {
        return -1;
      }

      if (a[sort] < b[sort]) {
        return 1;
      }

      return 0;
    }
  });
};
