import React from 'react';
import styles from './Checkbox.module.css';
import { SvgSelector } from '../../SvgSelector';


export const CheckBox = ({ id, label}) => {
  return (
        <div className={styles.checkbox}>
          <label className={styles.label}>
            <input
              className={styles.input}
              value={label}
              type='checkbox'
              id={id}
            />
            <div className={styles.area}>
              <span className={styles.marker}></span>
              <SvgSelector className={styles.icon} id='checkMark' />
            </div>
            {label && <span className={styles.text}>{label}</span>}
          </label>
        </div>
  );
};
