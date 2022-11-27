import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './PageModal.module.css';
import useDebounce from '../../../../Hooks/useDebounce';
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
    setPage(e.target.value);
  };

  const debouncedValue = useDebounce(page, 300);
  useEffect(() => {
    if (!isFinite(debouncedValue)) return;
    if (parseInt(debouncedValue) > totalPage) return;
    dispatch(setAction({ key: 'sumTo', value: page }));
  }, [debouncedValue]);

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
