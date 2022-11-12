import React from 'react';
import styles from './OrderBody.module.css';
import cn from 'classnames';
import { TableBody } from '../../../../shared/Table/TableBody/TableBody';
import { TableRow } from '../../../../shared/Table/TableBody/TableRow/TableRow';
import { TableCell } from '../../../../shared/Table/TableBody/TableCell/TableCell';
import { StatusCell } from '../../../../shared/Table/TableBody/StatusCell/StatusCell';
import { CheckBox } from '../../../../shared/Checkbox/Checkbox';

export const OrderBody = ({ className, date }) => {
  return (
    <TableBody className={cn(styles._, className)}>
      {date.slice(0, 10).map((item) => {
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
      })}
    </TableBody>
  );
};
