import React from 'react';
import { TableBodyCell } from '../TableBodyCell/TableBodyCell';
import styles from './TableBodyStatusCell.module.css';
import cn from 'classnames';
import { Icon } from '../../../../shared/Icons/Icon';

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

export const TableBodyStatusCell = ({ classNames, status }) => {
  const cellClassName = cn(styles._, classNames, {
    [styles.confirmed]: status === STATUS_MAP[status],
    [styles.canceled]: status === STATUS_MAP[status],
  });

  const iconClassName = cn(styles.icon, STYLES_ICON[status]);

  return (
    <TableBodyCell className={cellClassName}>
      <div className={styles.area}>
        <Icon
          name={STATUS_ICON[status] || STATUS_ICON.other}
          className={iconClassName}
        />
        <span className={styles.text}>{STATUS_FILTERS[status]}</span>
      </div>
    </TableBodyCell>
  );
};
