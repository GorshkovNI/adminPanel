import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '../../shared/Table/Table';
import {
  //getAllOrders,
  getClients,
  getFilter,
} from '../../store/selector/selector';
import { setAction } from '../../store/slice/filterSlice';
import { OrderBody } from './OrderBody/OrderBody';
import { PageSize } from './OrderConstant/OrderConstant';
import { OrderFooter } from './OrderFooter/OrderFooter';
import { OrderHeader } from './OrderHeader/OrderHeader';
import styles from './TableView.module.css';

export const TableView = () => {
  const currentPage = useSelector(getFilter).currentPage;
  const [filter, sortedLength] = useSelector(getClients);
  const [visibleModal, setVisibleModal] = useState(false);

  const handleModal = () => {
    setVisibleModal(!visibleModal);
  };

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
        totalCount={sortedLength}
        pageSize={PageSize}
        currentPage={currentPage}
        onPageChange={selectPage}
        onClick={handleModal}
      />
    </Table>
  );
};
