import React from 'react';
import { Button } from '../../../shared/Button/Button';
import { Pagination } from './Pagination/Pagination';
import styles from './TableFooter.module.css';

export const TableFooter = ({
  footerDate: { activeRecords, onClickPage, currentPage },
}) => {
  return (
    <div className={styles.wrapper}>
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
    </div>
  );
};
