import React from 'react';
import { Button } from '../../../shared/Button/Button';
import { TableFooter } from '../../../shared/Table/TableFooter/TableFooter';
import { Pagination } from '../OrderFooter/Pagination/Pagination';
import styles from './OrderFooter.module.css';

export const OrderFooter = ({
  className,
  totalCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  return (
    <TableFooter className={className}>
      <div className={styles.area}>
        <div className={styles.edit}>
          <span className={styles.records}>Выбрано записей: 9</span>
          <Button className={styles.buttonStatus} icon='pencil'>
            Изменить статус
          </Button>
          <Button className={styles.buttonDelete} mode='delete' icon='bin'>
            Удалить
          </Button>
        </div>
        <Pagination
          className='pagination-bar'
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      </div>
    </TableFooter>
  );
};
