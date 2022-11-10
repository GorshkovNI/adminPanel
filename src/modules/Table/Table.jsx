import React, { useContext } from 'react';
import { TableContext } from '../../context/TableContext';
import styles from './Table.module.css';
import { TableBody } from './TableBody/TableBody';
import { TableBodyCell } from './TableBody/TableBodyCell/TableBodyCell';
import { TableBodyStatusCell } from './TableBody/TableBodyStatusCell/TableBodyStatusCell';
import { TableRow } from './TableBody/TableRow/TableRow';
import { TableFooter } from './TableFooter/TableFooter';
import { TableHeader } from './TableHeader/TableHeader';
import { TableHeaderCell } from './TableHeaderCell/TableHeaderCell';

export const Table = () => {
  const { tableStore } = useContext(TableContext);

  return (
    <div className={styles.wrapper}>
      <TableHeader>
        <TableHeaderCell
          className={styles.headerCell}
          checkbox={true}
          isSort={false}
        >
          #
        </TableHeaderCell>
        <TableHeaderCell className={styles.headerCell}>Дата</TableHeaderCell>
        <TableHeaderCell className={styles.headerCell}>Статус</TableHeaderCell>
        <TableHeaderCell className={styles.headerCell}>Позиция</TableHeaderCell>
        <TableHeaderCell className={styles.headerCell}>Сумма</TableHeaderCell>
        <TableHeaderCell className={styles.headerCell} isSort={false}>
          ФИО покупателя
        </TableHeaderCell>
      </TableHeader>
      <TableBody
        className={styles.tableBody}
        count={
          tableStore.totalRecordPage > 10 ? 10 : tableStore.totalRecordPage
        }
      >
        {tableStore.clients
          ?.slice(0, tableStore.totalRecordPage)
          .map((item) => {
            return (
              <TableRow key={item.orderNumber}>
                <TableBodyCell className={styles.headerCell} checkbox={true}>
                  {item.orderNumber}
                </TableBodyCell>
                <TableBodyCell className={styles.headerCell}>
                  {item.date}
                </TableBodyCell>
                <TableBodyStatusCell
                  classNames={styles.headerCell}
                  status={item.status}
                />
                <TableBodyCell className={styles.headerCell}>
                  {item.amount}
                </TableBodyCell>
                <TableBodyCell className={styles.headerCell}>
                  {item.sum}
                </TableBodyCell>
                <TableBodyCell className={styles.headerCell}>
                  {item.customer}
                </TableBodyCell>
              </TableRow>
            );
          })}
      </TableBody>
      <TableFooter footerDate={tableStore} />
    </div>
  );
};
