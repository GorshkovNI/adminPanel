import React from 'react';
import styles from './ModalHeader.module.css';
import cn from 'classnames';

export const ModalHeader = ({ children, className }) => {
  return <div className={cn(styles._, className)}>{children}</div>;
};
