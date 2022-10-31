import React, { useState } from 'react';
import { Button } from '../../../shared/Button/Button';
import { Icon } from '../../../shared/Icons/Icon';
import { Search } from '../../../shared/Search/Search';
import { FilterBlock } from '../FilterBlock/FilterBlock';
import styles from './SearchBlock.module.css';

export const SearchBlock = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.filter}>
          <Search placeholder='Номер заказа или ФИО' />
          <Button icon='filter' onClick={handleActive}>
            Фильтры
          </Button>
          <Button type='transparent'>Сбросить фильтры</Button>
        </div>
        <div className={styles.loadArea}>
          <Icon name='refresh' className={styles.icon} />
          <span className={styles.text}>Загрузка</span>
        </div>
      </div>
      {isActive && <FilterBlock />}
    </div>
  );
};
