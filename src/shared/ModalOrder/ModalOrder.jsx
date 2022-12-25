import React from 'react';
import styles from './ModalOrder.module.css';
import cn from 'classnames';

export const ModalOrder = ({ children, className }) => {
  return <div className={cn(styles._, className)}>{children}</div>;
};
