import React from 'react';
import styles from './StatusCell.module.css';
import cn from 'classnames';
import { Icon } from '../../../Icons/Icon';

export const STATUS_FILTERS = {
  new: 'Новый',
  calculation: 'Рассчет',
  confirmed: 'Подтвержден',
  postponed: 'Отложен',
  completed: 'Выполнен',
  canceled: 'Отменен',
};

const STATUS_MAP = {
  new: 'new',
  calculation: 'calculation',
  confirmed: 'confirmed',
  postponed: 'postponed',
  completed: 'completed',
  canceled: 'canceled',
};

const STATUS_ICON = {
  new: 'dot',
  completed: 'checkmark',
  canceled: 'abort',
  other: 'dot',
};

const STYLES_ICON = {
  new: styles.iconNew,
  calculation: styles.iconCalc,
  confirmed: styles.iconConfirmed,
  postponed: styles.iconPostponed,
  completed: styles.iconCompleted,
  canceled: styles.iconCanceled,
};

export const StatusCell = ({ classNames, status }) => {
  const cellClassName = cn(styles.area, classNames, {
    [styles.confirmed]: status === STATUS_MAP[status],
    [styles.canceled]: status === STATUS_MAP[status],
  });

  return (
    <div className={cellClassName}>
      <Icon
        name={STATUS_ICON[status] || STATUS_ICON.other}
        className={cn(styles.icon, STYLES_ICON[status] || styles.other)}
      />
      <span className={styles.text}>{STATUS_FILTERS[status]}</span>
    </div>
  );
};
