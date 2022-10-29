import React from 'react';
import { CheckBox } from '../Checkbox/Checkbox';
import styles from './Dropdown.module.css';

export const filterName = [
  { id: 1, label: 'Новый' },
  { id: 2, label: 'Расчет' },
  { id: 3, label: 'Подтвержден' },
  { id: 4, label: 'Отложен' },
  { id: 5, label: 'Выполнен' },
  { id: 6, label: 'Отменен' },
];

export const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.list} >
        {filterName.map((current) => (
          <li className={styles.item} key={current.id}>
            <CheckBox label={current.label} key={current.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
