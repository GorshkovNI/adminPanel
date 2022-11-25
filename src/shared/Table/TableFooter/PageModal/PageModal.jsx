import React from 'react';
import styles from './PageModal.module.css';

export const PageModal = () => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{'Номер страницы'}</span>
      <input className={styles.input} placeholder='Введите номер' />
    </div>
  );
};
