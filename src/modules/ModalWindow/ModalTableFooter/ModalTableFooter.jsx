import React from 'react';
import { TableFooter } from '../../../shared/Table/TableFooter/TableFooter';
import styles from './ModalTableFooter.module.css';
import cn from 'classnames';

export const ModalTableFooter = ({ children, className }) => {
  return (
    <TableFooter className={cn(styles._, className)}>
      <span className={styles.text}>{children}</span>
    </TableFooter>
  );
};
