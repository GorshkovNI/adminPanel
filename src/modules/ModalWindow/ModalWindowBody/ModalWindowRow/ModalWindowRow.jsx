import React from 'react';
import { TableCell } from '../../../../shared/Table/TableBody/TableCell/TableCell';
import { TableRow } from '../../../../shared/Table/TableBody/TableRow/TableRow';
import styles from './ModalWindowRow.module.css';

const setSum = (number) => {
  let value = String(number).replace(/[^0-9]/g, '');
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return value + ' ₽';
};

export const ModalWindowRow = ({ item }) => {
  return (
    <TableRow className={styles._}>
      <TableCell className={styles.cell}>{item.vendorCode}</TableCell>
      <TableCell className={styles.cell}>{item.name}</TableCell>
      <TableCell className={styles.cell}>{setSum(item.price)}</TableCell>
    </TableRow>
  );
};
