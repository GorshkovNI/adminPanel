import React, { useState, useCallback } from 'react';
import { FilterBlock } from '../FilterBlock/FilterBlock';
import { Header } from '../Header';
import { SearchBlock } from '../SearchBlock/SearchBlock';

export const MainPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChanged = useCallback(() => {
    setIsVisible(!isVisible);
  });

  return (
    <div>
      <Header />
      <SearchBlock toggleFilterBlock={handleChanged} />
      {isVisible && <FilterBlock />}
    </div>
  );
};
