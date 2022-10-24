import React from 'react';
import styles from './Checkbox.module.css';
import { SvgSelector } from '../../SvgSelector';
import { StateContext } from '../Inputs/InputDropdown/InputDropdownContainer';

const noop = () => {};

export const CheckBox = ({ id, label }) => {
  return (
    <StateContext.Consumer>
      {({ returnText = noop }) => (
        <div className={styles.checkbox}>
          <label className={styles._}>
            <input
              className={styles.input}
              value={label}
              type='checkbox'
              id={id}
              onChange={returnText}
            />
            <div className={styles.area}>
              <span className={styles.marker}></span>
              <SvgSelector className={styles.icon} id='checkMark' />
            </div>
            <span className={styles.text}>{label}</span>
          </label>
        </div>
      )}
    </StateContext.Consumer>
  );
};
