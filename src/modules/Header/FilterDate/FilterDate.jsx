import React from 'react';
import { Input } from '../../../shared/Input/Input';
import styles from '../FilterDate/FilterDate.module.css';

const inputSize = {
  standart: styles.standart,
  small: styles.small,
  medium: styles.medium,
  lsmall: styles.lsmall,
};

export const FilterDate = ({
  onChangeTo,
  onChangeFrom,
  dateTo,
  dateFrom,
  maxlength,
  onResetTo,
  onResetFrom,
}) => {
  return (
    <div className={styles.infoBlock}>
      <span className={styles.text}>Дата заказа</span>
      <div className={styles.dateInput}>
        <Input
          className={inputSize.small}
          value={dateTo}
          onChange={onChangeTo}
          onClick={onResetTo}
          disabled={false}
          prefix='c'
          maxlength={maxlength}
          placeholder='dd.mm.yyyy'
          nameIcon='xMedium'
        />
        <Input
          className={inputSize.small}
          value={dateFrom}
          onChange={onChangeFrom}
          onClick={onResetFrom}
          disabled={false}
          prefix='до'
          maxlength={maxlength}
          placeholder='dd.mm.yyyy'
          nameIcon='xMedium'
        />
      </div>
    </div>
  );
};
