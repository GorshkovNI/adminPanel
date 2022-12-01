import { createSelector } from '@reduxjs/toolkit';
import {
  FILTER_TYPE,
  PageSize,
} from '../../modules/TableView/OrderConstant/OrderConstant';

export const getAllOrders = (state) => state.orders.orders;
export const getIdOrders = (state) => state.orders.selectedId;
export const getFilter = (state) => state.filter;
export const getSelect = (state) => state.filter.select;
export const getSort = (state) => state.filter.sort;
export const getDirection = (state) => state.filter.direction;
export const getCurrent = (state) => state.filter.currentPage;

export const getClients = createSelector(
  [getAllOrders, getFilter, getSelect, getSort, getDirection],

  (orders, filters) => {
    const filteredClients = filterOrders(orders, filters);
    const sortedClients = sortedOrders(
      filteredClients,
      filters.sort,
      filters.direction
    );
    const pagination = currentTableData(sortedClients, filters.currentPage);
    return [pagination, sortedClients.length];
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
    const parseDate = Date.parse(date);
    if (!min && !max) return true;
    if (!min) return parseDate <= max;
    if (!max) return parseDate >= min;
    return parseDate >= min && parseDate <= max;
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
  return (order, name) => {
    const getValue = Number.isFinite(Number(nameOrOrder))
      ? order.startsWith(nameOrOrder)
      : name.toLowerCase().includes(nameOrOrder);
    return getValue;
  };
};

const filterOrders = (clients, filter) => {
  const sumFilter = intervalSum(filter.sumTo, filter.sumFrom);
  const dateFilter = intervalDate(filter.dateTo, filter.dateFrom);
  const selectedFilter = selectedStatus(filter.select);
  const nameAndOrderFilter = filteredNameOrOrder(filter.search);

  return clients?.filter(({ sum, date, status, customer, orderNumber }) => {
    return [
      sumFilter(parseFloat(sum)),
      dateFilter(date),
      selectedFilter(status),
      nameAndOrderFilter(orderNumber, customer),
    ].every(Boolean);
  });
};

const sortedOrders = (orders, sort, direction) => {
  return orders.sort((a, b) => {
    if (!direction) {
      if (isFinite(a[sort])) {
        return a[sort] - b[sort];
      }
      return a[sort].localeCompare(b[sort]);
    }

    if (isFinite(a[sort])) {
      return b[sort] - a[sort];
    }
    return b[sort].localeCompare(a[sort]);
  });
};

const currentTableData = (date, currentPage) => {
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  return date.slice(firstPageIndex, lastPageIndex);
};
