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
  filterData:{
    valueTo,
    valueFrom,
    onChangeTo,
    onChangeFrom,
    onResetTo,
    onResetFrom
  },
}) => {
  return (
    <div className={styles.infoBlock}>
      <span className={styles.text}>Дата заказа</span>
      <div className={styles.dateInput}>
        <Input
          className={inputSize.small}
          value={valueTo}
          onChange={onChangeTo}
          onClick={onResetTo}
          disabled={false}
          prefix='c'
          placeholder='dd.mm.yyyy'
          nameIcon='xMedium'
        />
        <Input
          className={inputSize.small}
          value={valueFrom}
          onChange={onChangeFrom}
          onClick={onResetFrom}
          disabled={false}
          prefix='до'
          placeholder='dd.mm.yyyy'
          nameIcon='xMedium'
        />
      </div>
    </div>
  );
};
