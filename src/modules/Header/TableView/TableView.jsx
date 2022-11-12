import React from 'react';
import { useContext } from 'react';
import { TableContext } from '../../../context/TableContext';
import { Table } from '../../../shared/Table/Table';
import { OrderBody } from './OrderBody/OrderBody';
import { OrderFooter } from './OrderFooter/OrderFooter';
import { OrderHeader } from './OrderHeader/OrderHeader';
import styles from './TableView.module.css';

export const TableView = () => {
  const { tableStore } = useContext(TableContext);

  return (
    <Table className={styles._}>
      <OrderHeader />
      <OrderBody className={styles.body} date={tableStore.clients} />
      <OrderFooter
        className={styles.footer}
        activeRecords={tableStore.activeRecords}
        currentPage={tableStore.currentPage}
        onClickPage={tableStore.onClickPage}
      />
    </Table>
  );
};
