import React from 'react';
import { Button } from '../../../../shared/Button/Button';
import cn from 'classnames';
import styles from './DeleteModal.module.css';

export const DeleteModal = ({
  isOpenDelete,
  label = 0,
  className,
  onDelete,
  onClick,
}) => {
  return (
    isOpenDelete && (
      <div className={cn(styles.container, className)}>
        <span className={styles.label}>Удалить {label} записей?</span>
        <Button className={styles.button} mode='transparent' onClick={onDelete}>
          Удалить
        </Button>
        <Button className={styles.button} onClick={onClick}>
          Отмена
        </Button>
      </div>
    )
  );
};
