import React, { useState } from 'react';
import { useContext } from 'react';
import { FilterContext } from '../../../context/FilterContext';
import { Button } from '../../../shared/Button/Button';
import { Icon } from '../../../shared/Icons/Icon';
import { Search } from '../../../shared/Search/Search';
import { FilterBlock } from '../FilterBlock/FilterBlock';
import styles from './SearchBlock.module.css';

export const SearchBlock = () => {
  const [isActive, setIsActive] = useState(false);
  const { filterStore } = useContext(FilterContext);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.filter}>
          <Search
            value={filterStore.search.value}
            onChange={filterStore.search.onChange}
            onReset={filterStore.search.onReset}
            placeholder='Номер заказа или ФИО'
          />
          <Button
            size='big'
            mode={isActive ? 'primary' : 'transparent'}
            icon='filter'
            onClick={handleActive}
          >
            Фильтры
          </Button>
          <Button
            size='big'
            mode='transparent'
            onClick={filterStore.search.onResetAll}
          >
            Сбросить фильтры
          </Button>
        </div>
        <div className={styles.loadArea}>
          <Icon name='refresh' className={styles.icon} />
          <span className={styles.text}>Загрузка</span>
        </div>
      </div>
      {isActive && <FilterBlock />}
    </div>
  );
};
