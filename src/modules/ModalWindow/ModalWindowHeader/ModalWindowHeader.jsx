import React from 'react';
import { TableHeader } from '../../../shared/Table/TableHeader/TableHeader';
import { TableHeaderCell } from '../../../shared/Table/TableHeaderCell/TableHeaderCell';
import styles from './ModalWindowHeader.module.css';

export const ModalWindowHeader = () => {
  return (
    <TableHeader className={styles._}>
      <TableHeaderCell className={styles.cell}>Артикул</TableHeaderCell>
      <TableHeaderCell className={styles.cell}>Наименование</TableHeaderCell>
      <TableHeaderCell className={styles.cell}>Цена</TableHeaderCell>
    </TableHeader>
  );
};
