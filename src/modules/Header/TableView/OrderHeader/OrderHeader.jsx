import React from 'react';
import styles from './OrderHeader.module.css';
import { TableHeader } from '../../../../shared/Table/TableHeader/TableHeader';
import { TableHeaderCell } from '../../../../shared/Table/TableHeaderCell/TableHeaderCell';
import { HEADER_CELL } from '../OrderConstant/OrderConstant';
import { CheckBox } from '../../../../shared/Checkbox/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { getDirection, getSort } from '../../../../store/selector/selector';
import { setAction } from '../../../../store/slice/filterSlice';
import { useState } from 'react';

export const OrderHeader = () => {
  const sortCell = useSelector(getSort);
  const direction = useSelector(getDirection);
  const dispatch = useDispatch();

  const [filterField, setFilterField] = useState(sortCell);

  const handleFiledSort = (e) => {
    if (e.target.id === filterField) {
      dispatch(setAction({ key: 'direction', value: !direction }));
    } else {
      setFilterField(e.target.id);
      dispatch(setAction({ key: 'sort', value: e.target.id }));
    }
  };

  return (
    <TableHeader styles={styles._}>
      <CheckBox className={styles.cell} />
      {Object.entries(HEADER_CELL).map(([name, { label, isIcon, sort }]) => {
        return (
          <TableHeaderCell
            key={name}
            id={name}
            isIcon={isIcon}
            className={styles.cell}
            isActive={sortCell === name}
            direction={direction}
            onClick={!sort ? () => {} : handleFiledSort}
          >
            {label}
          </TableHeaderCell>
        );
      })}
    </TableHeader>
  );
};
