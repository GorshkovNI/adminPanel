import React from 'react';
import { Header } from '../Header/Header';
import { SearchBlock } from '../Header/SearchBlock/SearchBlock';
import { FilterContextProvider } from '../../context/FilterContext';
import { Table } from '../Table/Table';
import { TableContextProvider } from '../../context/TableContext';

export const MainPage = () => {
  return (
    <div>
      <Header />
      <FilterContextProvider>
        <SearchBlock />
      </FilterContextProvider>
      <TableContextProvider>
        <Table />
      </TableContextProvider>
    </div>
  );
};
