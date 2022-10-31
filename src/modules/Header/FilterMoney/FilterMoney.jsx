import React from 'react';
import { Input } from '../../../shared/Input/Input';
import styles from '../FilterMoney/FilterMoney.module.css';

const inputSize = {
  standart: styles.standart,
  small: styles.small,
  medium: styles.medium,
  lsmall: styles.lsmall,
};

export const FilterMoney = () => {
  return (
    <div className={styles.infoBlock}>
      <span className={styles.text}>Дата заказа</span>
      <div className={styles.dateInput}>
        <Input className={inputSize.small} prefix='от' placeholder='₽' />
        <Input className={inputSize.small} prefix='до' placeholder='₽' />
      </div>
    </div>
  );
};
