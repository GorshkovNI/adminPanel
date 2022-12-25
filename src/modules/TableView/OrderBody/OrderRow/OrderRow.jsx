import React from 'react';
import styles from './OrderRow.module.css';
import { CheckBox } from '../../../../shared/Checkbox/Checkbox';
import { StatusCell } from '../../../../shared/Table/TableBody/StatusCell/StatusCell';
import { TableCell } from '../../../../shared/Table/TableBody/TableCell/TableCell';
import { TableRow } from '../../../../shared/Table/TableBody/TableRow/TableRow';
import { formatMoney } from '../../../../utils/formatMoney';
import { parseDate } from '../../../../utils/parseDate.js';

export const OrderRow = ({ item, onSelectOrders, selectOrders, onClick }) => {
  const getCheckbox = (e) => {
    e.target.id ? onSelectOrders(e.target.id) : '';
    e.nativeEvent.stopPropagation();
  };

  return (
    <TableRow
      className={styles.row}
      key={item.id}
      checked={selectOrders.includes(item.id)}
    >
      <label>
        <TableCell
          className={styles.cellCheckbox}
          onClick={getCheckbox}
          id={item.id}
        >
          <CheckBox
            id={item.id}
            onClick={getCheckbox}
            checked={selectOrders.includes(item.id)}
          />
        </TableCell>
      </label>
      <div className={styles.groupCell} id={item.id} onClick={onClick}>
        <TableCell className={styles.cellOrder}>{item.orderNumber}</TableCell>
        <TableCell className={styles.cellDate}>
          {parseDate(item.date)}
        </TableCell>
        <StatusCell classNames={styles.cellStatus} status={item.status} />
        <TableCell className={styles.cellAmount}>{item.amount}</TableCell>
        <TableCell className={styles.cellSum}>
          {formatMoney(item.sum)}
        </TableCell>
        <TableCell className={styles.cellCustomer}>{item.customer}</TableCell>
      </div>
    </TableRow>
  );
};
