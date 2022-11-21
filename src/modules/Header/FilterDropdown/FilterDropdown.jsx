import React from 'react';
import { useContext } from 'react';
import { FilterContext } from '../../../context/FilterContext';
import { Select } from '../Select/Select';
import styles from './FitlerDropdown.module.css';

export const FilterDropdown = () => {
  const { filterStore } = useContext(FilterContext);
  return (
    <div className={styles.status}>
      <div className={styles.infoBlock}>
        <span className={styles.text}>Статус заказа</span>
        <Select filter={filterStore.select} />
      </div>
    </div>
  );
};
