import React from 'react';
import styles from './ModalBody.module.css';
import cn from 'classnames';

export const ModalBody = ({ children, className }) => {
  return <div className={cn(styles._, className)}>{children}</div>;
};
