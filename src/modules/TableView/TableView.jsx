import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '../../shared/Table/Table';
import {
  //getAllOrders,
  getClients,
  getFilter,
  getIdOrders,
} from '../../store/selector/selector';
import { setAction } from '../../store/slice/filterSlice';
import {
  changeStatus,
  cleanSelectedId,
  deleteOrders,
  setIdOrders,
  setPageIdOrder,
} from '../../store/slice/ordersSlice';
import { OrderBody } from './OrderBody/OrderBody';
import { PageSize } from './OrderConstant/OrderConstant';
import { OrderFooter } from './OrderFooter/OrderFooter';
import { OrderHeader } from './OrderHeader/OrderHeader';
import styles from './TableView.module.css';

export const TableView = ({ getId }) => {
  const currentPage = useSelector(getFilter).currentPage;
  const dispatch = useDispatch();

  const [filter, sortedLength] = useSelector(getClients);
  const selectedIdOrders = useSelector(getIdOrders);
  const [visibleModal, setVisibleModal] = useState(false);
  const [isOpenDeleteModal, setDeleteModal] = useState(false);

  const handleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const selectPage = (e) => {
    dispatch(setAction({ key: 'currentPage', value: Number(e.target.id) }));
  };

  const setOrders = (id) => {
    dispatch(setIdOrders(id));
  };

  const deleteOrder = () => {
    dispatch(deleteOrders(selectedIdOrders));
    dispatch(cleanSelectedId());
    handleOpenDelete();
    //setSelectedOrders([])
  };

  const handleRadioModal = (e) => {
    const status = e.target.value;
    dispatch(changeStatus({ status }));
  };

  const handleOpenDelete = () => {
    setDeleteModal(!isOpenDeleteModal);
  };

  const handleAllId = (e) => {
    console.log(e.currentTarget.id);
    e.target.id ? dispatch(setPageIdOrder(filter.map((item) => item.id))) : '';
  };

  return (
    <Table className={styles._}>
      <OrderHeader getAllId={handleAllId} id='1' />
      <OrderBody
        className={styles.body}
        date={filter}
        onSelectOrders={setOrders}
        selectOrders={selectedIdOrders}
        getId={getId}
      />
      <OrderFooter
        className={styles.footer}
        totalCount={sortedLength}
        pageSize={PageSize}
        currentPage={currentPage}
        onPageChange={selectPage}
        onClick={handleModal}
        selectOrders={selectedIdOrders.length}
        deleteOrder={deleteOrder}
        changeStatus={handleRadioModal}
        isOpen={isOpenDeleteModal}
        handleOpenDelete={handleOpenDelete}
      />
    </Table>
  );
};
