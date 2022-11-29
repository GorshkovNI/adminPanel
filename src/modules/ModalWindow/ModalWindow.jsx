import React from 'react';
import { Icon } from '../../shared/Icons/Icon';
import { ModalHeader } from '../../shared/ModalOrder/ModalHeader/ModalHeader';
import { ModalOrder } from '../../shared/ModalOrder/ModalOrder';
import styles from './ModalWindow.module.css';

export const ModalWindow = ({ ordersNumber = 534563 }) => {
  return (
    <ModalOrder className={styles.modalOrder}>
      <ModalHeader className={styles.modalHeader}>
        <span className={styles.request}>Заявка #{ordersNumber}</span>
        <button className={styles.buttonAction} onClick={() => {}}>
          <Icon name='xLarge' className={styles.actionIcon} />
        </button>
      </ModalHeader>
    </ModalOrder>
  );
};
