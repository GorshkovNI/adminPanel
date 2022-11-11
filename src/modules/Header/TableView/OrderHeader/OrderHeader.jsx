import React from 'react';
import styles from './OrderHeader.module.css';
import { TableHeader } from '../../../../shared/Table/TableHeader/TableHeader';
import { TableHeaderCell } from '../../../../shared/Table/TableHeaderCell/TableHeaderCell';
import { CheckBox } from '../../../../shared/Checkbox/Checkbox';

export const OrderHeader = () => {
  return (
    <TableHeader styles={styles._}>
      <TableHeaderCell>
        <CheckBox />
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell}>#</TableHeaderCell>
      <TableHeaderCell className={styles.cell} onSort={() => {}}>
        Дата
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell} onSort={() => {}}>
        Статус
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell} onSort={() => {}}>
        Позиция
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell} onSort={() => {}}>
        Сумма
      </TableHeaderCell>
      <TableHeaderCell className={styles.cell} onSort={() => {}}>
        ФИО покупателя
      </TableHeaderCell>
    </TableHeader>
  );
};
