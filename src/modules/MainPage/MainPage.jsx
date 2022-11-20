import React from 'react';
import { Header } from '../Header/Header';
import { SearchBlock } from '../Header/SearchBlock/SearchBlock';
import { FilterContextProvider } from '../../context/FilterContext';

export const MainPage = () => {
  return (
    <div>
      <Header />
      <FilterContextProvider>
        <SearchBlock />
      </FilterContextProvider>
    </div>
  );
};
