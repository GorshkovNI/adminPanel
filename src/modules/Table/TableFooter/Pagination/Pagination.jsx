import React from 'react';
import { Cell } from './Cell/Cell';
import styles from './Pagination.module.css';

export const Pagination = ({ currentPage, onClick }) => {
  const indexs = [1, 2, 3, '...', 18];

  return (
    <div className={styles.wrapper}>
      <div className={styles.area}>
        <span className={styles.pages}>
          {indexs?.map((item, index) => {
            return item == Number(currentPage) ? (
              <Cell
                key={index}
                value={item}
                isActive={true}
                onClick={onClick}
              />
            ) : (
              <Cell key={index} value={item} onClick={onClick} />
            );
          })}
        </span>
      </div>
    </div>
  );
};
