import React from 'react';
import styles from './OrderBody.module.css';
import cn from 'classnames';
import { TableBody } from '../../../../shared/Table/TableBody/TableBody';
import { OrderRow } from './OrderRow/OrderRow';

export const OrderBody = ({ className, date }) => {
  return (
    <TableBody className={cn(styles._, className)}>
      {date?.slice(0, 100).map((item, index) => {
        return <OrderRow key={index} item={item} />;
      })}
    </TableBody>
  );
};
