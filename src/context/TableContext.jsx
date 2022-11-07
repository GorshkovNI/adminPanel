import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { CLIENTS } from './Clients';

export const TableContext = createContext();

const TOTAL_RECORDS_PAGE = 10; // Сколько записей отображаем на странице отображаем
const TOTAL_COUNT = CLIENTS.length; // Всего записей
const TOTAL_PAGE_COUNT = Math.ceil(TOTAL_COUNT / TOTAL_RECORDS_PAGE); // Количество страниц
const TOTAL_PAGES = 4; // 1 2 3 ... 6, т.е 5 элементов
const SIBLING_COUNT = 3; // количество отображаемых item слева

export const TableContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePage = (e) => {
    setCurrentPage(e.target.value);
  };

  const tableStore = {
    clients: CLIENTS,
    activeRecords: 9,
    totalRecordPage: TOTAL_RECORDS_PAGE,
    totalPageCount: TOTAL_PAGE_COUNT,
    totalPages: TOTAL_PAGES,
    totalCount: TOTAL_COUNT,
    siblingCount: SIBLING_COUNT,
    currentPage: currentPage,
    onClickPage: handlePage,
  };

  return (
    <TableContext.Provider value={{ tableStore: tableStore }}>
      {children}
    </TableContext.Provider>
  );
};
