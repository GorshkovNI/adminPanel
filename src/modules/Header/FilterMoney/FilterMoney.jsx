import React from 'react';
import { Input } from '../../../shared/Input/Input';
import styles from '../FilterMoney/FilterMoney.module.css';

const inputSize = {
  standart: styles.standart,
  small: styles.small,
  medium: styles.medium,
  lsmall: styles.lsmall,
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
          onClick={onResetTo}
          prefix='от'
          placeholder='₽'
          nameIcon='xMedium'
        />
        <Input
          className={inputSize.small}
          value={sumFrom}
          onChange={onChangeFrom}
          onClick={onResetFrom}
          prefix='до'
          placeholder='₽'
          nameIcon='xMedium'
        />
      </div>
    </div>
  );
};
