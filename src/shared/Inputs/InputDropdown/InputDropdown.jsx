import React from 'react';
import { SvgSelector } from '../../../SvgSelector';
import styles from './InputDropdown.module.css';
import cn from 'classnames';
import { Dropdown } from '../../Dropdown/Dropdown';

const areaTypes = {
  default: '',
  small: 'small',
  medium: 'medium',
  lsmall: 'lsmall',
};

export const InputDropdown = (props) => {

  const areaSize = cn(styles.area, {
    [styles.default]: areaTypes.default === props.size,
    [styles.medium]: areaTypes.medium === props.size,
    [styles.small]: areaTypes.small === props.size,
    [styles.lsmall]: areaTypes.lsmall === props.size,
  });

  return (
    <div className={styles.input} onClick={props.isVisible}>
      <div className={areaSize}>
        <input
          className={styles.text}
          type='text'
          placeholder='Введите'
          value={props.value}
        />
        <button className={styles.buttonAction}>
          <SvgSelector className={styles.actionIcon} id='arrow' />
        </button>
        <div
          className={`${styles.dropdown} ${props.visible ? styles.active : ''}`}
        >
          <Dropdown />
        </div>
      </div>
    </div>
  );
};
