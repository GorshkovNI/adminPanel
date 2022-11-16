import React from 'react';
import styles from './Select.module.css';
import cn from 'classnames';
import { Input } from '../../../shared/Input/Input';
import { useState } from 'react';
import { Dropdown } from '../../../shared/Dropdown/Dropdown';
import { CheckBox } from '../../../shared/Checkbox/Checkbox';
import FILTER_TYPE from '../TableView/OrderConstant/OrderConstant';
// const FILTER_TYPE = {
//   any: 'Любой',
//   new: 'Новый',
//   calc: 'Рассчет',
//   confirmed: 'Подтвержден',
//   delayed: 'Отложен',
//   completed: 'Выполнен',
//   cancelled: 'Отменен',
// };

export const Select = ({ value, allDropdownItem, onSelecItem }) => {
  const [isVisible, setIsVisible] = useState(false);
  const hangleChangeVisible = () => {
    setIsVisible(!isVisible);
  };

  const status = function getTextStatuses(firstArray, secondArray) {
    return !firstArray.length || firstArray.length === secondArray.length
      ? FILTER_TYPE.any
      : firstArray.join(', ');
  };

  const containerClassName = cn(styles.container);
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <Input
          value={status(value, allDropdownItem)}
          className={containerClassName}
          nameIcon='vArrow'
          onClick={hangleChangeVisible}
        />
        <div className={styles.dropdown}>
          {isVisible && (
            <Dropdown>
              {Object.entries(FILTER_TYPE).map(([key, value]) => (
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
