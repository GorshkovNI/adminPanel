import React from 'react';
import { TableBody } from '../../../shared/Table/TableBody/TableBody';
import cn from 'classnames';
import styles from './ModalWindowBody.module.css';
import { ModalWindowRow } from './ModalWindowRow/ModalWindowRow';

// const ORDER = [
//   {
//     vendorCode: '081830',
//     name: 'НАПРАВ ЦЕПИ ГРМ',
//     price: 45874,
//   },
//   {
//     vendorCode: '2015846',
//     name: 'МОДУЛЬ ECU FOCUS 2011- / ECOSPORT 2013-',
//     price: 32054,
//   },
//   {
//     vendorCode: 'S671090312',
//     name: 'Жидкость гидравлическая ZF LifeguardFluid 8 для АК',
//     price: 13188,
//   },

//   {
//     vendorCode: 'S671090312',
//     name: 'Жидкость гидравлическая ZF LifeguardFluid 8 для АК',
//     price: 13188,
//   },
//   {
//     vendorCode: 'S671090312',
//     name: 'Жидкость гидравлическая ZF LifeguardFluid 8 для АК',
//     price: 13188,
//   },
// ];

export const ModalWindowBody = ({ className, orders }) => {
  return (
    <TableBody className={cn(styles._, className)}>
      {orders.order.map((item, index) => {
        return <ModalWindowRow key={index} item={item} orders={orders} />;
      })}
    </TableBody>
  );
};
