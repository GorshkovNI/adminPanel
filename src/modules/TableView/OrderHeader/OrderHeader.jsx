import React from 'react';
import styles from './OrderHeader.module.css';
import { TableHeader } from '../../../shared/Table/TableHeader/TableHeader';
import { TableHeaderCell } from '../../../shared/Table/TableHeaderCell/TableHeaderCell';
import { HEADER_CELL } from '../OrderConstant/OrderConstant';
import { CheckBox } from '../../../shared/Checkbox/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { getDirection, getSort } from '../../../store/selector/selector';
import { setData } from '../../../store/slice/filterSlice';
import { useState } from 'react';

export const OrderHeader = ({ getAllId, id, checked }) => {
  const sortCell = useSelector(getSort);
  const direction = useSelector(getDirection);
  const dispatch = useDispatch();

  const [filterField, setFilterField] = useState(sortCell);

  const handleFiledSort = (e) => {
    if (e.currentTarget.id === filterField) {
      dispatch(setData({ key: 'direction', value: !direction }));
    } else {
      setFilterField(e.currentTarget.id);
      dispatch(setData({ key: 'sort', value: e.currentTarget.id }));
      dispatch(setData({ key: 'direction', value: !direction }));
    }
  };

  return (
    <TableHeader styles={styles._}>
      <CheckBox
        className={styles.cell}
        onClick={getAllId}
        id={id}
        checked={checked}
      />
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
