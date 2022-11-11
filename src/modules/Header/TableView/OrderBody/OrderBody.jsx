import React from 'react';
import styles from './OrderBody.module.css';
import { TableBody } from '../../../../shared/Table/TableBody/TableBody';
import { TableRow } from '../../../../shared/Table/TableBody/TableRow/TableRow';
import { TableCell } from '../../../../shared/Table/TableBody/TableCell/TableCell';
import { StatusCell } from '../../../../shared/Table/TableBody/StatusCell/StatusCell';
import { CheckBox } from '../../../../shared/Checkbox/Checkbox';

export const OrderBody = ({ date }) => {
  return (
    <TableBody className={styles._}>
      {date.slice(0, 15).map((item) => {
        return (
          <TableRow key={item.orderNumber}>
            <TableCell className={styles.cell} key={item.orderNumber}>
              <CheckBox />
            </TableCell>
            <TableCell className={styles.cell} key={item.orderNumber}>
              {item.orderNumber}
            </TableCell>
            <TableCell className={styles.cell} key={item.orderNumber}>
              {item.date}
            </TableCell>
            <StatusCell classNames={styles.cell} status={item.status} />
            <TableCell className={styles.cell} key={item.orderNumber}>
              {item.amount}
            </TableCell>
            <TableCell className={styles.cell} key={item.orderNumber}>
              {item.sum}
            </TableCell>
            <TableCell className={styles.cell} key={item.orderNumber}>
              {item.customer}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};
