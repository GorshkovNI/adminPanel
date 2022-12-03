/* eslint-disable no-unused-vars */
import React from 'react';
import cn from 'classnames';
import styles from './Pagination.module.css';
import { usePagination } from '../../../../Hooks/usePagination';
import { Button } from '../../../../shared/Button/Button';
import { PageModal } from '../PageModal/PageModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAction } from '../../../../store/slice/filterSlice';

const DOTS = '...';
const SUFFIX = '#';

export const Pagination = (props) => {
  const dispatch = useDispatch();

  const [isOpen, seIsOpen] = useState(false);

  const handlePageClick = (text) => {
    if (text === DOTS) return;
    if (text === SUFFIX) {
      seIsOpen(!isOpen);
      return;
    }
    dispatch(setAction({ key: 'currentPage', value: text }));
  };

  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    onClick,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    dots: DOTS,
    suffix: SUFFIX,
  });

  if (currentPage === 0) {
    return null;
  }

  return (
    <div className={styles._}>
      {paginationRange.map((text, index) => {
        return (
          <div className={styles._} key={index}>
            {text === DOTS && <span className={styles.dots}>{text}</span>}
            {text !== DOTS && (
              <div className={styles.container}>
                <Button
                  className={cn(
                    styles.button,
                    currentPage === text ? styles.active : styles.nonactive
                  )}
                  onClick={() => handlePageClick(text)}
                >
                  {text}
                </Button>

                {text === SUFFIX && (
                  <PageModal
                    className={styles.modal}
                    label='Номер страницы'
                    isOpen={isOpen}
                    totalPage={Math.ceil(totalCount / pageSize)}
                    currentPage={currentPage}
                    placeholder='Введите номер'
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
