import React, { useState } from 'react';
import cn from 'classnames';
import styles from './PageModal.module.css';
import { useDispatch } from 'react-redux';
import { setAction } from '../../../../store/slice/filterSlice';

export const PageModal = ({
  label,
  placeholder,
  className,
  isOpen,
  totalPage,
}) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState('');
  const handlePage = (e) => {
    if (isNaN(parseInt(e.target.value))) {
      setPage('');
      return;
    }
    setPage(parseInt(e.target.value));
    if (isNumber(e.target.value)) return;
    if (e.target.value > totalPage) return;
    dispatch(
      setAction({ key: 'currentPage', value: parseInt(e.target.value) })
    );
  };

  function isNumber(value) {
    if (value instanceof Number) value = value.valueOf(); // Если это объект числа, то берём значение, которое и будет числом

    return isFinite(value) && value === parseInt(value, 10);
  }

  // const debouncedValue = useDebounce(page, 300);
  // useEffect(() => {
  //   if (!isNumber(debouncedValue)) return;
  //   if (debouncedValue > totalPage) return;
  //   dispatch(setAction({ key: 'currentPage', value: page }))
  // }, [debouncedValue]);

  return (
    isOpen && (
      <div className={cn(styles.container, className)}>
        <span className={styles.label}>{label}</span>
        <input
          value={page}
          onChange={handlePage}
          className={styles.input}
          placeholder={placeholder}
        />
      </div>
    )
  );
};
