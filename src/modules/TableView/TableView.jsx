import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '../../shared/Table/Table';
import {
  getClients,
  getFilter,
  getIdOrders,
} from '../../store/selector/selector';
import { setData } from '../../store/slice/filterSlice';
import {
  changeStatus,
  cleanSelectedId,
  deleteOrders,
  setIdOrders,
  setPageIdOrder,
} from '../../store/slice/ordersSlice';
import { OrderBody } from './OrderBody/OrderBody';
import { PAGE_SIZE } from './OrderConstant/OrderConstant';
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
  const [isOpenChandeStatusModal, setChangeModal] = useState(false);
  const idOnPage = filter.map((item) => item.id);

  function contains(arr2, arr1) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) == -1) return false;
    }
    return true;
  }

  const handleOpenChangeStatus = () => {
    setChangeModal(!isOpenChandeStatusModal);
  };

  const handleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const selectPage = (e) => {
    dispatch(setData({ key: 'currentPage', value: Number(e.target.id) }));
  };

  const setOrders = (id) => {
    dispatch(setIdOrders(id));
  };

  const deleteOrder = () => {
    dispatch(deleteOrders(selectedIdOrders));
    dispatch(cleanSelectedId());
    handleOpenDelete();
  };

  const handleRadioModal = (e) => {
    const status = e.target.value;
    dispatch(changeStatus({ status }));
    setChangeModal(!isOpenChandeStatusModal);
  };

  const handleOpenDelete = () => {
    setDeleteModal(!isOpenDeleteModal);
  };

  const handleAllId = (e) => {
    if (e.target.id) {
      dispatch(setPageIdOrder(filter.map((item) => item.id)));
    }
  };

  return (
    <Table className={styles._}>
      <OrderHeader
        getAllId={handleAllId}
        id='allCheck'
        checked={contains(selectedIdOrders, idOnPage)}
      />
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
        pageSize={PAGE_SIZE}
        currentPage={currentPage}
        onPageChange={selectPage}
        onClick={handleModal}
        selectOrders={selectedIdOrders.length}
        deleteOrder={deleteOrder}
        changeStatus={handleRadioModal}
        isOpen={isOpenDeleteModal}
        handleOpenDelete={handleOpenDelete}
        isOpenChandeStatusModal={isOpenChandeStatusModal}
        setChangeModal={handleOpenChangeStatus}
      />
    </Table>
  );
};
