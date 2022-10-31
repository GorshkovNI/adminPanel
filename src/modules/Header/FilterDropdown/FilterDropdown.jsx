import React from 'react';
import {
  DROPDOWN_ELEMENT,
  FilterContext,
} from '../../../context/FilterContext';
import { CheckBox } from '../../../shared/Checkbox/Checkbox';
import { Dropdown } from '../../../shared/Dropdown/Dropdown';
import { InputDropdown } from '../../../shared/InputDropdown/InputDropdown';
import styles from './FitlerDropdown.module.css';

const inputSize = {
  standart: styles.standart,
};

export const FilterDropdown = () => {
  return (
    <FilterContext.Consumer>
      {({ onCheckedStatus, value }) => (
        <div className={styles.status}>
          <div className={styles.infoBlock}>
            <span className={styles.text}>Статус заказа</span>
            <InputDropdown className={inputSize.standart} value={value}>
              <Dropdown>
                {DROPDOWN_ELEMENT.map((current) => (
                  <CheckBox
                    label={current.label}
                    key={current.id}
                    id={current.id}
                    className={styles.checkboxText}
                    checked={current.checked}
                    onChange={onCheckedStatus}
                  />
                ))}
              </Dropdown>
            </InputDropdown>
          </div>
        </div>
      )}
    </FilterContext.Consumer>
  );
};
