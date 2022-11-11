import React from 'react';
import { Button } from '../../../../shared/Button/Button';
import { TableFooter } from '../../../../shared/Table/TableFooter/TableFooter';
import { Pagination } from '../../../../shared/Table/TableFooter/Pagination/Pagination';
import styles from './OrderFooter.module.css';

export const OrderFooter = ({
  className,
  activeRecords,
  onClickPage,
  currentPage,
}) => {
  return (
    <TableFooter className={className}>
      <div className={styles.area}>
        <div className={styles.edit}>
          <span className={styles.records}>
            Выбрано записей: {activeRecords}
          </span>
          <Button className={styles.buttonStatus} icon='pencil'>
            Изменить статус
          </Button>
          <Button className={styles.buttonDelete} mode='delete' icon='bin'>
            Удалить
          </Button>
        </div>
        <Pagination onClick={onClickPage} currentPage={currentPage} />
      </div>
    </TableFooter>
  );
};
