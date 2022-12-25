import React from 'react';
import { Select } from '../Select/Select';
import styles from './FitlerDropdown.module.css';

export const FilterDropdown = ({ value, onSelecItem }) => {
  //const { filterStore } = useContext(FilterContext)

  return (
    <div className={styles.status}>
      <div className={styles.infoBlock}>
        <span className={styles.text}>Статус заказа</span>
        <Select value={value} onSelecItem={onSelecItem} />
      </div>
    </div>
  );
};
