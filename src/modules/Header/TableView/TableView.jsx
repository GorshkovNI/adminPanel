import React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { TableContext } from '../../../context/TableContext';
import { Table } from '../../../shared/Table/Table';
import { getClients } from '../../../store/selector/selector';
import { OrderBody } from './OrderBody/OrderBody';
import { OrderFooter } from './OrderFooter/OrderFooter';
import { OrderHeader } from './OrderHeader/OrderHeader';
import styles from './TableView.module.css';

export const TableView = () => {
  const { tableStore } = useContext(TableContext);
  const [filter] = useSelector(getClients);

  return (
    <Table className={styles._}>
      <OrderHeader />
      <OrderBody className={styles.body} date={filter} />
      <OrderFooter
        className={styles.footer}
        activeRecords={tableStore.activeRecords}
        currentPage={tableStore.currentPage}
        onClickPage={tableStore.onClickPage}
      />
    </Table>
  );
};
