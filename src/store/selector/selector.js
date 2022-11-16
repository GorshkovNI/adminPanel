import { createSelector } from '@reduxjs/toolkit';
import { CLIENTS } from '../../context/Clients';

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

const filterSum = (clients, filter) => {
  const sumFilter = intervalSum(filter.sumTo, filter.sumFrom);
  const dateFilter = intervalDate(filter.dateTo, filter.dateFrom);

  return clients.filter(({ sum, date }) => {
    return [sumFilter(parseFloat(sum)), dateFilter(date)].every(Boolean);
  });
};

// export const getClients = (state) => {
//     const sumFilter = getFilter(state)
//     const sumTo = sumFilter.sumTo ? sumFilter.sumTo : "0"
//     const sumFrom = sumFilter.sumFrom ? sumFilter.sumFrom : Infinity

//     const filterSum = CLIENTS.filter((client) => {
//         const value = parseInt(client.sum.replace(/\s/g, ''))
//         return value >= sumTo && value <= sumFrom ? client : ''
//     })
//     return filterSum
// }

// const filterSum = (clients, filters) => {
//     const sumTo = filters.sumTo ? filters.sumTo : "0"
//     const sumFrom = filters.sumFrom ? filters.sumFrom : Infinity
//     const filterSum = clients.filter((client) => {
//         const value = parseInt(client.sum.replace(/\s/g, ''))
//         return value >= sumTo && value <= sumFrom ? client : ''
//     })
//     return filterSum
// }

// export const getDate = (state) => {
//     const dateFilter = getFilter(state)
//     const dateTo =  Date.parse(dateFilter.dateTo)
//     const dateFrom = Date.parse(dateFilter.dateFrom)

//     console.log('dateTo ', dateTo + ' ' + 'dayFrom ', dateFrom )

//     const filterDate = CLIENTS.filter((client) => {
//         const [day, month, year] = client.date.split(" ")[0].split(".")
//         if(!day && !month && !year){
//             return ""
//         }
//         const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
//         return date.getTime() >= dateTo && dateFrom <= date.getTime() ? client : ''
//     })
//     return filterDate
// }
