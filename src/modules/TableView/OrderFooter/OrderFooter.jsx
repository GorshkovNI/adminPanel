import React from 'react';
import { useState } from 'react';
import { Button } from '../../../shared/Button/Button';
import { TableFooter } from '../../../shared/Table/TableFooter/TableFooter';
import { Pagination } from '../OrderFooter/Pagination/Pagination';
import { DeleteModal } from './DeleteModal/DeleteModal';
import styles from './OrderFooter.module.css';
import { RadioModal } from './RadioModal/RadioModal';

export const OrderFooter = ({
  className,
  totalCount,
  pageSize,
  currentPage,
  onPageChange,
  onClick,
  selectOrders,
  deleteOrder,
  changeStatus,
}) => {
  const [isOpenDeleteModal, setDeleteModal] = useState(false);
  const [isOpenChandeStatusModal, setChangeModal] = useState(false);
  const handleOpenDelete = () => {
    setDeleteModal(!isOpenDeleteModal);
  };

  const handleOpenChangeStatus = () => {
    setChangeModal(!isOpenChandeStatusModal);
  };

  return (
    <TableFooter className={className}>
      <div className={styles.area}>
        <div className={styles.edit}>
          <span className={styles.records}>
            Выбрано записей: {selectOrders}
          </span>
          <Button
            className={styles.buttonStatus}
            icon='pencil'
            onClick={handleOpenChangeStatus}
          >
            Изменить статус
          </Button>
          <RadioModal isOpen={isOpenChandeStatusModal} onClick={changeStatus} />
          <Button
            className={styles.buttonDelete}
            mode='delete'
            icon='bin'
            onClick={handleOpenDelete}
          >
            Удалить
          </Button>
          <DeleteModal
            isOpenDelete={isOpenDeleteModal}
            label={selectOrders}
            onDelete={deleteOrder}
            onClick={handleOpenDelete}
          />
        </div>
        <Pagination
          className={styles.pagination}
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={onPageChange}
          onClick={onClick}
        />
      </div>
    </TableFooter>
  );
};
