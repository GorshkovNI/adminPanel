import React, { useCallback } from 'react';
import { useState } from 'react';
import { Cell } from './Cell/Cell';
import styles from './Pagination.module.css';

export const Pagination = ({
  // arr = [1, 2, 3],
  currentPage,
  onClick,
  // totalRecordPage,
  // totalPageCount,
  // totalPages,
  // totalCount,
  // siblingCount,
}) => {
  const [pages, setPages] = useState([0]);

  // if(totalCount <= totalRecordPage){
  //     setPages(1)
  //     return
  // }

  // if(totalPageCount <= totalPages){
  //     setLeftSide(totalPages)
  //     return
  // }

  // if(totalPageCount - (totalPageCount - totalPages) === totalPages){
  //     setLeftSide(totalPageCount - totalPages)
  //     setRigthSide(totalCount)
  //     return
  // }
  const value = useCallback(() => {
    if (currentPage <= 2) {
      setPages([1, 2, 3]);
      return;
    }

    setPages([currentPage - 1, currentPage, Number(currentPage) + 1]);
  }, [currentPage]);

  return (
    <div className={styles.wrapper}>
      {console.log(value)}
      <div className={styles.area}>
        <span className={styles.pages}>
          {pages.map((item, index) => {
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
        {/* {<Cell value={pages.join(' ')} isActive={true} onClick={onClick}/>} */}
      </div>
    </div>
  );
};
