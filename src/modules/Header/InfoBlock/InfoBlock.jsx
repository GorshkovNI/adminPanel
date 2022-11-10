import React, { useContext } from 'react';
import styles from './InfoBlock.module.css';
import { Button } from '../../../shared/Button/Button';
import { useState } from 'react';
import { Dropdown } from '../../../shared/Dropdown/Dropdown';
import { ThemeContext } from '../../../context/ThemeContext';

const THEME = {
  dark: 'Темная тема',
  light: 'Светлая тема',
};

export const InfoBlock = () => {
  const { themeStore } = useContext(ThemeContext);

  const [visible, setVisible] = useState(false);

  const handlerVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Список заказов</span>
      <Button mode='transparent' icon='sun' onClick={handlerVisible}>
        <span className={styles.text}>
          {THEME[themeStore.theme.valueTheme]}
        </span>
      </Button>
      {visible && (
        <div className={styles.dropdownArea}>
          <Dropdown label='Выберите тему' className={styles.listItem}>
            <div className={styles.dropdownBox}>
              <Button
                mode={
                  themeStore.theme.valueTheme === 'light'
                    ? 'primary'
                    : 'transparent'
                }
                icon='sun'
                onClick={themeStore.theme.turnLightTheme}
              >
                Светлая тема
              </Button>
              <Button
                mode={
                  themeStore.theme.valueTheme === 'dark'
                    ? 'primary'
                    : 'transparent'
                }
                icon='moon'
                onClick={themeStore.theme.turnDarkTheme}
              >
                Темная тема
              </Button>
            </div>
          </Dropdown>
        </div>
      )}
    </div>
  );
};
