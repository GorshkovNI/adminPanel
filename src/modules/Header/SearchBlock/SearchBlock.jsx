import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../shared/Button/Button';
import { Icon } from '../../../shared/Icons/Icon';
import { Search } from '../../../shared/Search/Search';
import { resetState } from '../../../store/slice/filterSlice';
import { FilterBlock } from '../FilterBlock/FilterBlock';
import styles from './SearchBlock.module.css';

export const SearchBlock = () => {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isFilterReset, setIsFilterReset] = useState(false);
  const dispatch = useDispatch();

  const handleValue = ({ target: { value } }) => {
    setValue(value);
    console.log(value);
  };

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const handleFilterReset = () => {
    setIsFilterReset(!isFilterReset);
    dispatch(resetState());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch({ key: 'search', value: value });
    }
  };

  const handleReset = () => {
    setValue('');
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.filter}>
          <Search
            value={value}
            onChange={handleValue}
            onReset={handleReset}
            onKeyPress={handleKeyPress}
            placeholder='Номер заказа или ФИО'
          />
          <Button icon='filter' onClick={handleActive}>
            Фильтры
          </Button>
          <Button mode='transparent' onClick={handleFilterReset}>
            Сбросить фильтры
          </Button>
        </div>
        <div className={styles.loadArea}>
          <Icon name='refresh' className={styles.icon} />
          <span className={styles.text}>Загрузка</span>
        </div>
      </div>
      {isActive && <FilterBlock isFilterReset={isFilterReset} />}
    </div>
  );
};
