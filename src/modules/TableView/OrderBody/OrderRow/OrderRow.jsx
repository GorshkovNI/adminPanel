import React from 'react';
import styles from './OrderRow.module.css';
import { CheckBox } from '../../../../shared/Checkbox/Checkbox';
import { StatusCell } from '../../../../shared/Table/TableBody/StatusCell/StatusCell';
import { TableCell } from '../../../../shared/Table/TableBody/TableCell/TableCell';
import { TableRow } from '../../../../shared/Table/TableBody/TableRow/TableRow';

export const OrderRow = ({ item }) => {
  return (
    <TableRow key={item.sum + ' ' + item.orderNumber}>
      <TableCell className={styles.cell}>
        <CheckBox />
      </TableCell>
      <TableCell className={styles.cell}>{item.orderNumber}</TableCell>
      <TableCell className={styles.cell}>{item.date}</TableCell>
      <StatusCell classNames={styles.cell} status={item.status} />
      <TableCell className={styles.cell}>{item.amount}</TableCell>
      <TableCell className={styles.cell}>{item.sum}</TableCell>
      <TableCell className={styles.cell}>{item.customer}</TableCell>
    </TableRow>
  );
};
