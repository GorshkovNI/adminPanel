import React from 'react';
import { setSum } from '../../../../shared/Function/Function';
import { TableCell } from '../../../../shared/Table/TableBody/TableCell/TableCell';
import { TableRow } from '../../../../shared/Table/TableBody/TableRow/TableRow';
import styles from './ModalWindowRow.module.css';

export const ModalWindowRow = ({ item }) => {
  return (
    <TableRow className={styles._}>
      <TableCell className={styles.cell}>{item.vendorCode}</TableCell>
      <TableCell className={styles.cell}>{item.name}</TableCell>
      <TableCell className={styles.cell}>{setSum(item.price)}</TableCell>
    </TableRow>
  );
};
