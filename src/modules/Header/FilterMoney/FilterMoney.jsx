import React from 'react';
import { Input } from '../../../shared/Input/Input';
import styles from '../FilterMoney/FilterMoney.module.css';

const inputSize = {
  standart: styles.standart,
  small: styles.small,
  medium: styles.medium,
  lsmall: styles.lsmall,
};

const onlyDigit = (number) => {
  let value = number.replace(/[^0-9]/g, '');
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return value;
};

export const FilterMoney = ({
  onChangeTo,
  onChangeFrom,
  sumTo,
  sumFrom,
  onResetTo,
  onResetFrom,
}) => {
  return (
    <div className={styles.infoBlock}>
      <span className={styles.text}>Сумма заказа</span>
      <div className={styles.dateInput}>
        <Input
          className={inputSize.small}
          value={sumTo}
          onChange={onChangeTo}
          onReset={onResetTo}
          prefix='от'
          placeholder='₽'
          nameIcon='xMedium'
          mode={onlyDigit}
        />
        <Input
          className={inputSize.small}
          value={sumFrom}
          onChange={onChangeFrom}
          onReset={onResetFrom}
          prefix='до'
          placeholder='₽'
          nameIcon='xMedium'
          mode={onlyDigit}
        />
      </div>
    </div>
  );
};
