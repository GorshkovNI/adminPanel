import React from 'react';
import styles from './OrderRow.module.css';
import { CheckBox } from '../../../../shared/Checkbox/Checkbox';
import { StatusCell } from '../../../../shared/Table/TableBody/StatusCell/StatusCell';
import { TableCell } from '../../../../shared/Table/TableBody/TableCell/TableCell';
import { TableRow } from '../../../../shared/Table/TableBody/TableRow/TableRow';
import { formatMoney } from '../../../../utils/formatMoney';
import { parseDate } from '../../../../utils/parseDate';

export const OrderRow = ({ item, onSelectOrders, selectOrders, onClick }) => {
  const getCheckbox = (e) => {
    e.target.id ? onSelectOrders(e.target.id) : '';
    e.nativeEvent.stopPropagation();
  };

  return (
    <TableRow
      className={styles.row}
      key={item.id}
      id={item.id}
      getIdRow={onClick}
    >
      <label>
        <TableCell className={styles.cell} onClick={onClick} id={item.id}>
          <CheckBox
            id={item.id}
            onClick={getCheckbox}
            checked={selectOrders.includes(item.id)}
          />
        </TableCell>
      </label>
      <TableCell className={styles.cell}>{item.orderNumber}</TableCell>
      <TableCell className={styles.cell}>{parseDate(item.date)}</TableCell>
      <StatusCell classNames={styles.cell} status={item.status} />
      <TableCell className={styles.cell}>{item.amount}</TableCell>
      <TableCell className={styles.cell}>{formatMoney(item.sum)}</TableCell>
      <TableCell className={styles.cell}>{item.customer}</TableCell>
    </TableRow>
  );
};
