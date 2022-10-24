import React from 'react';
import { SvgSelector } from '../../SvgSelector';
import styles from './Search.module.css';

const noop = () => {};

export const Search = ({
  onCheckedEmpty = noop,
  deleteText = noop,
  ...props
}) => {
  return (
    <div className={styles.searchbar}>
      <div className={styles.area}>
        <SvgSelector className={styles.icon} id='search' />
        <input
          className={styles.text}
          type='text'
          placeholder={props.placeholder}
          value={props.value}
          onChange={onCheckedEmpty}
        />
        {props.isActive && (
          <button className={styles.searchButtonClose}>
            <svg
              className={`${styles.buttonIcon} ${styles.iconClose}`}
              viewBox='0 0 16 16'
              fill='none'
              stroke='#8055FF'
              xmlns='http://www.w3.org/2000/svg'
              onClick={deleteText}
            >
              <path d='M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5' fill='none' />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
