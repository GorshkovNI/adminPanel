import React from 'react';
import styles from './InfoBlock.module.css';
import { Button } from '../../../shared/Button/Button';

export const InfoBlock = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Список заказов</span>
      <Button size='big' type='secondary' text='Светлая тема' icon='sun' />
    </div>
  );
};
