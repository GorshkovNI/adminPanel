import React from 'react';
import styles from './MainPage.module.css';
import { Header } from '../Header/Header';
import { SearchBlock } from '../Header/SearchBlock/SearchBlock';
import { TableView } from '../TableView/TableView';

export const MainPage = () => {
  return (
    <div className={styles._}>
      <Header />
      <SearchBlock />
      <TableView />
    </div>
  );
};
