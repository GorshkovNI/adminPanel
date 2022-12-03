import React from 'react';
import { TableCell } from '../../../../shared/Table/TableBody/TableCell/TableCell';
import { TableRow } from '../../../../shared/Table/TableBody/TableRow/TableRow';
import { formatMoney } from '../../../../utils/formatMoney';
import styles from './ModalWindowRow.module.css';

export const ModalWindowRow = ({ item }) => {
  return (
    <TableRow className={styles._}>
      <TableCell className={styles.cell}>{item.vendorCode}</TableCell>
      <TableCell className={styles.cell}>{item.name}</TableCell>
      <TableCell className={styles.cell}>{formatMoney(item.price)}</TableCell>
    </TableRow>
  );
};
