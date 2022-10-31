import React from 'react';
import { Button } from '../../../shared/Button/Button';
import { FilterDate } from '../FilterDate/FilterDate';
import { FilterDropdown } from '../FilterDropdown/FilterDropdown';
import { FilterMoney } from '../FilterMoney/FilterMoney';
import styles from './FilterBlock.module.css';

export const FilterBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <FilterDate />
        <FilterDropdown />
        <FilterMoney />
        <div className={styles.button}>
          <Button type='transparent'>Применить</Button>
        </div>
      </div>
    </div>
  );
};
