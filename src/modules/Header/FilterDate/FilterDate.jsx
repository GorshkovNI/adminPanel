import React from 'react';
import { Input } from '../../../shared/Input/Input';
import styles from '../FilterDate/FilterDate.module.css';

const inputSize = {
  standart: styles.standart,
  small: styles.small,
  medium: styles.medium,
  lsmall: styles.lsmall,
};

export const FilterDate = () => {
  return (
    <div className={styles.infoBlock}>
      <span className={styles.text}>Дата заказа</span>
      <div className={styles.dateInput}>
        <Input
          className={inputSize.small}
          disabled={false}
          prefix='c'
          placeholder='dd.mm.yyyy'
        />
        <Input
          className={inputSize.small}
          disabled={false}
          prefix='c'
          placeholder='dd.mm.yyyy'
        />
      </div>
    </div>
  );
};
