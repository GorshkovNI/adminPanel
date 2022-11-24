import React from 'react';
import styles from './Select.module.css';
import cn from 'classnames';
import { useState } from 'react';
import { Dropdown } from '../../../shared/Dropdown/Dropdown';
import { CheckBox } from '../../../shared/Checkbox/Checkbox';
import { FILTER_TYPE } from '../TableView/OrderConstant/OrderConstant';
import { InputDropdown } from './InputDropdown/InputDropdown';

export const Select = ({ value, onSelecItem }) => {
  const [isVisible, setIsVisible] = useState(false);
  const hangleChangeVisible = () => {
    setIsVisible(!isVisible);
  };

  const getDropDownElement = (array) => {
    const result = Object.entries(array)
      .slice(1, array.length)
      .map(([value]) => {
        return value;
      });
    return result;
  };

  const status = function getTextStatuses(firstArray, secondArray) {
    return !firstArray.length || firstArray.length === secondArray.length
      ? FILTER_TYPE.any
      : firstArray
          .map((item) => {
            return FILTER_TYPE[item];
          })
          .join(', ');
  };

  const containerClassName = cn(styles.container);
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <InputDropdown
          value={status(value, getDropDownElement(FILTER_TYPE))}
          className={containerClassName}
          nameIcon='vArrow'
          onReset={hangleChangeVisible}
          onVisible={hangleChangeVisible}
          isVisible={isVisible}
        />
        <div className={styles.dropdown}>
          {isVisible && (
            <Dropdown>
              {Object.entries(FILTER_TYPE)
                .slice(1, FILTER_TYPE.length)
                .map(([key, value]) => (
                  <CheckBox
                    label={value}
                    key={key}
                    id={key}
                    className={styles.checkboxText}
                    onChange={onSelecItem}
                  />
                ))}
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
};
