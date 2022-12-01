import React from 'react';
import styles from './OrderRow.module.css';
import { CheckBox } from '../../../../shared/Checkbox/Checkbox';
import { StatusCell } from '../../../../shared/Table/TableBody/StatusCell/StatusCell';
import { TableCell } from '../../../../shared/Table/TableBody/TableCell/TableCell';
import { TableRow } from '../../../../shared/Table/TableBody/TableRow/TableRow';

const getDate = (date) => {
  const newDate = new Date(date);
  const day =
    newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
  const month =
    newDate.getMonth() < 9
      ? `0${newDate.getMonth() + 1}`
      : newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${day}.${month}.${year}`;
};

const setSum = (number) => {
  let value = String(number).replace(/[^0-9]/g, '');
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return value + ' ₽';
};

export const OrderRow = ({ item, onSelectOrders, selectOrders, onClick }) => {
  const getCheckbox = (e) => {
    e.target.id ? onSelectOrders(e.target.id) : '';
    e.nativeEvent.stopPropagation();
  };

  return (
    <TableRow key={item.id} id={item.id} getIdRow={onClick}>
      <TableCell className={styles.cell}>
        <CheckBox
          id={item.id}
          onClick={getCheckbox}
          checked={selectOrders.includes(item.id)}
        />
      </TableCell>
      <TableCell className={styles.cell}>{item.orderNumber}</TableCell>
      <TableCell className={styles.cell}>{getDate(item.date)}</TableCell>
      <StatusCell classNames={styles.cell} status={item.status} />
      <TableCell className={styles.cell}>{item.amount}</TableCell>
      <TableCell className={styles.cell}>{setSum(item.sum)}</TableCell>
      <TableCell className={styles.cell}>{item.customer}</TableCell>
    </TableRow>
  );
};