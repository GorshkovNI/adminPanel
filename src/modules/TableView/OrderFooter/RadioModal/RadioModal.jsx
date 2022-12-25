import React from 'react';
import classnames from 'classnames';
import styles from './RadioModal.module.css';
import { Radio } from '../../../../shared/Radio/Radio';
import { STATUS_TYPE } from '../../OrderConstant/OrderConstant';

export const RadioModal = ({
  className,
  isOpen,
  onClick,
  name = 'dropdownStatus',
}) => {
  const classNames = classnames(styles._, className, {
    [styles.disabled]: !isOpen,
  });
  return (
    <div className={classNames}>
      <ul className={styles.list}>
        {Object.entries(STATUS_TYPE).map(([key, value]) => (
          <li key={key} className={styles.item}>
            <Radio title={value} value={key} name={name} onClick={onClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};
