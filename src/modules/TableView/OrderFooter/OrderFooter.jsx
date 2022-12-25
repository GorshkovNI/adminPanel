import React from 'react';
import cn from 'classnames';
import { Button } from '../../../shared/Button/Button';
import { Modal } from '../../../shared/Modal/Modal';
import { TableFooter } from '../../../shared/Table/TableFooter/TableFooter';
import { Pagination } from '../OrderFooter/Pagination/Pagination';
import styles from './OrderFooter.module.css';
import { RadioModal } from './RadioModal/RadioModal';
import { useSelector } from 'react-redux';
import { getLengthSelectedIds } from '../../../store/selector/selector';

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
  handleOpenDelete,
  isOpen,
  isOpenChandeStatusModal,
  setChangeModal,
}) => {
  const selectedIds = useSelector(getLengthSelectedIds);
  const editClassName = cn(styles.edit, {
    [styles.visible]: selectedIds,
  });

  return (
    <TableFooter className={className}>
      <div className={styles.area}>
        <div className={editClassName}>
          <span className={styles.records}>
            Выбрано записей: {selectOrders}
          </span>
          <Button
            className={styles.buttonStatus}
            icon='pencil'
            onClick={setChangeModal}
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
          <Modal
            isOpen={isOpen}
            label={'Удалить ' + selectOrders + ' записей?'}
            onFirstAction={deleteOrder}
            onSecondAction={handleOpenDelete}
            textButton1='Удалить'
            textButton2='Отмена'
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
