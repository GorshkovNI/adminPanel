import React from 'react';
import { useContext } from 'react';
import { TableContext } from '../../context/TableContext';
import { Table } from '../../shared/Table/Table';
import { OrderHeader } from '../TableView/OrderHeader/OrderHeader';
import { OrderBody } from '../TableView/OrderBody/OrderBody';
import { OrderFooter } from '../TableView/OrderFooter/OrderFooter';

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
