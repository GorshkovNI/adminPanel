import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '../../../shared/Table/Table';
import {
  getAllOrders,
  getClients,
  getFilter,
} from '../../../store/selector/selector';
import { setAction } from '../../../store/slice/filterSlice';
import { OrderBody } from './OrderBody/OrderBody';
import { PageSize } from './OrderConstant/OrderConstant';
import { OrderFooter } from './OrderFooter/OrderFooter';
import { OrderHeader } from './OrderHeader/OrderHeader';
import styles from './TableView.module.css';

export const TableView = () => {
  const [filter] = useSelector(getClients);
  const orders = useSelector(getAllOrders);
  const currentPage = useSelector(getFilter).currentPage;

  const dispatch = useDispatch();

  const selectPage = (e) => {
    dispatch(setAction({ key: 'currentPage', value: Number(e.target.id) }));
  };

  return (
    <Table className={styles._}>
      <OrderHeader />
      <OrderBody className={styles.body} date={filter} />
      <OrderFooter
        className={styles.footer}
        totalCount={orders.length}
        pageSize={PageSize}
        currentPage={currentPage}
        onPageChange={selectPage}
      />
    </Table>
  );
};
