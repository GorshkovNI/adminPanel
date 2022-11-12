import React from 'react';
import styles from './MainPage.module.css';
import { Header } from '../Header/Header';
import { SearchBlock } from '../Header/SearchBlock/SearchBlock';
import { FilterContextProvider } from '../../context/FilterContext';
import { TableContextProvider } from '../../context/TableContext';
import { TableView } from '../Header/TableView/TableView';

export const MainPage = () => {
  return (
    <div className={styles._}>
      <Header />
      <FilterContextProvider>
        <SearchBlock />
      </FilterContextProvider>
      <TableContextProvider>
        <TableView />
      </TableContextProvider>
    </div>
  );
};
