import React from 'react';
import { TableBody } from '../../../shared/Table/TableBody/TableBody';
import cn from 'classnames';
import styles from './ModalWindowBody.module.css';
import { ModalWindowRow } from './ModalWindowRow/ModalWindowRow';

export const ModalWindowBody = ({ className, orders }) => {
  return (
    <TableBody className={cn(styles._, className)}>
      {orders.order.map((item, index) => {
        return <ModalWindowRow key={index} item={item} orders={orders} />;
      })}
    </TableBody>
  );
};
