import React from 'react';
import { Button } from '../../../shared/Button/Button';
import { InputContainer } from '../../../shared/Inputs/Input/InputContainer';
import { InputDropdownContainer } from '../../../shared/Inputs/InputDropdown/InputDropdownContainer';
import styles from './FilterBlock.module.css';

export const FilterBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <div className={styles.infoBlock}>
          <span className={styles.text}>Дата заказа</span>
          <div className={styles.dateInput}>
            <InputContainer
              className='normal'
              size='small'
              label='c'
              placeholder='dd.mm.yyyy'
            />
            <InputContainer
              className='normal'
              size='small'
              label='по'
              placeholder='dd.mm.yyyy'
            />
          </div>
        </div>
        <div className={styles.status}>
          <div className={styles.infoBlock}>
            <span className={styles.text}>Статус заказа</span>
            <div className={styles.dateInput}>
              <InputDropdownContainer size='medium' />
            </div>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <span className={styles.text}>Сумма заказа</span>
          <div className={styles.dateInput}>
            <InputContainer
              className='normal'
              size='lsmall'
              label='от'
              placeholder='₽'
            />
            <InputContainer
              className='normal'
              size='lsmall'
              label='до'
              placeholder='₽'
            />
          </div>
        </div>
        <div className={styles.button}>
          <Button size='big' type='secondary' text='Светлая тема' icon='sun' />
        </div>
      </div>
    </div>
  );
};
