import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../shared/Button/Button';
//import { getSelect } from '../../../store/selector/selector';
import { setAction, setSelected } from '../../../store/slice/filterSlice';
import { FilterDate } from '../FilterDate/FilterDate';
import { FilterDropdown } from '../FilterDropdown/FilterDropdown';
import { FilterMoney } from '../FilterMoney/FilterMoney';
import styles from './FilterBlock.module.css';


export const FilterBlock = ({ isFilterReset }) => {
  //const filter = useSelector(getSelect)
  const dispatch = useDispatch();

  const [sumTo, setSumTo] = useState('');
  const [sumFrom, setSumFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [dateFrom, setDateFrom] = useState('');

  const checkDate = (date) => {
    const [day, month, year] = date.split('.');
    if (!day && !month && !year) {
      return '';
    }
    const newDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    ).toString();

    return Date.parse(newDate);
  };

  // From Money
  const handleFilterSumTo = ({ target: { value } }) => {
    setSumTo(value);
  };

  const handleFilterSumtFrom = ({ target: { value } }) => {
    setSumFrom(value);
  };

  const handleResetSumTo = () => {
    setSumTo('');
  };

  const handleResetSumFrom = () => {
    setSumFrom('');
  };

  //From Date
  const handlerFilterDateTo = ({ target: { value } }) => {
    setDateTo(value);
  };

  const handlerFilterDateFrom = ({ target: { value } }) => {
    setDateFrom(value);
  };

  const handleResetDateTo = () => {
    setDateTo('');
  };

  const handleResetDateFrom = () => {
    setDateFrom('');
  };

  const handleApply = () => {
    dispatch(setAction({ key: 'sumTo', value: sumTo }));
    dispatch(setAction({ key: 'sumFrom', value: sumFrom }));
    dispatch(setAction({ key: 'dateTo', value: checkDate(dateTo) }));
    dispatch(setAction({ key: 'dateFrom', value: checkDate(dateFrom) }));
  };

  //from select
  const [dropdownItem, setDropdownItem] = useState([]);

  const handleSelect = (value) => {
    const newItem = !dropdownItem.includes(value.target.id)
      ? [...dropdownItem, value.target.id]
      : dropdownItem.filter((item) => item !== value.target.id);
    setDropdownItem(
      !dropdownItem.includes(value.target.id)
        ? [...dropdownItem, value.target.id]
        : dropdownItem.filter((item) => item !== value.target.id)
    );
    dispatch(setSelected(newItem));
  };

  useEffect(() => {
    setSumTo('');
    setSumFrom('');
    setDateTo('');
    setDateFrom('');
    setDropdownItem([]);
  }, [isFilterReset]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <FilterDate
          dateTo={dateTo}
          dateFrom={dateFrom}
          onChangeTo={handlerFilterDateTo}
          onChangeFrom={handlerFilterDateFrom}
          maxlength='10'
          onResetTo={handleResetDateTo}
          onResetFrom={handleResetDateFrom}
        />
        <FilterDropdown value={dropdownItem} onSelecItem={handleSelect} />
        <FilterMoney
          sumTo={sumTo}
          sumFrom={sumFrom}
          onChangeTo={handleFilterSumTo}
          onChangeFrom={handleFilterSumtFrom}
          onResetTo={handleResetSumTo}
          onResetFrom={handleResetSumFrom}
        />
        <div className={styles.button}>
          <Button mode='transparent' onClick={handleApply}>
            Применить
          </Button>
        </div>
      </div>
    </div>
  );
};
