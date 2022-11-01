import React from 'react';
import { useContext } from 'react';
import { FilterContext } from '../../../context/FilterContext';
import { Button } from '../../../shared/Button/Button';
import { FilterDate } from '../FilterDate/FilterDate';
import { FilterDropdown } from '../FilterDropdown/FilterDropdown';
import { FilterMoney } from '../FilterMoney/FilterMoney';
import styles from './FilterBlock.module.css';


export const FilterBlock = () => {
  const { filterStore } = useContext(FilterContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <FilterDate filterData={filterStore.data} />
        <FilterDropdown />
        <FilterMoney filterData={filterStore.money}/>
        <div className={styles.button}>
          <Button mode='transparent' >Применить</Button>
        </div>
      </div>
    </div>
  );
};
