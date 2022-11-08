import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { CLIENTS } from './Clients';

export const TableContext = createContext();
const TOTAL_RECORDS_PAGE = 10; // Сколько записей отображаем на странице отображаем
// const TOTAL_COUNT = CLIENTS.length; // Всего записей
// const TOTAL_PAGE_COUNT = Math.ceil(TOTAL_COUNT / TOTAL_RECORDS_PAGE); // Количество страниц

export const TableContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePage = (e) => {
    setCurrentPage(e.target.value);
  };

  const tableStore = {
    clients: CLIENTS,
    activeRecords: 9,
    currentPage: currentPage,
    onClickPage: handlePage,
    totalRecordPage: TOTAL_RECORDS_PAGE,
  };

  return (
    <TableContext.Provider value={{ tableStore: tableStore }}>
      {children}
    </TableContext.Provider>
  );
};
