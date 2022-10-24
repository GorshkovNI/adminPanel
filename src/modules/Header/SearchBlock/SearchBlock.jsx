import React from 'react';
import { Button } from '../../../shared/Button/Button';
import { SearchContainer } from '../../../shared/Search/SearchContainer';
import styles from './SearchBlock.module.css';

export const SearchBlock = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}>
        <SearchContainer placeholder='Номер заказа или ФИО' />
        <Button
          size='big'
          type='primary'
          text='Фильтры'
          icon='filter'
          action={props.toggleFilterBlock}
        />
        <Button
          size='medium'
          type='secondary'
          text='Сбросить фильтры'
          icon=''
        />
      </div>
      <Button size='big' type='secondary' text='Загрузка' icon='load' />
    </div>
  );
};
