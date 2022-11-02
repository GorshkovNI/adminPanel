import React, { useContext } from 'react';
import styles from './InfoBlock.module.css';
import { Button } from '../../../shared/Button/Button';
import { useState } from 'react';
import { Dropdown } from '../../../shared/Dropdown/Dropdown';
import { ThemeContext } from '../../../context/ThemeContext';


export const InfoBlock = () => {

  const themeStore = useContext(ThemeContext)

  const [visible, setVisible] = useState(false)

  const handlerVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Список заказов</span>
      <Button mode='transparent' icon='sun' onClick={handlerVisible}>
        <span>Светлая тема</span>
      </Button>
      {visible &&  
        <div className={styles.dropdownArea}>
            <Dropdown label='Выберите тему' className={styles.listItem}>
              <div className={styles.dropdownBox}>
                <Button mode='transparent' icon='sun' onClick={themeStore.themeStore.theme.turnLightTheme}>Светлая тема</Button> 
                <Button mode='primary' icon='moon' onClick={themeStore.themeStore.theme.turnDarkTheme}>Темная тема</Button> 
              </div>
            </Dropdown>
        </div>
      }
    </div>
  );
};
