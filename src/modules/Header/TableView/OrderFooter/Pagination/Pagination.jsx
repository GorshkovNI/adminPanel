import React from 'react';
import cn from 'classnames';
import styles from './Pagination.module.css';
import { usePagination, DOTS } from '../../../../../Hooks/usePagination';

export const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul className={cn(styles.container, { [className]: className })}>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className={styles.dots}>
              &#8230;
            </li>
          );
        }
        return (
          <li
            key={index}
            id={pageNumber}
            className={cn(styles.item, {
              [styles.selected]: pageNumber === currentPage,
            })}
            onClick={onPageChange}
          >
            {pageNumber}
          </li>
        );
      })}
    </ul>
  );
};
