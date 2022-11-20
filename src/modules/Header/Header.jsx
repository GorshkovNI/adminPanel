import React from 'react';
import styles from './Header.module.css';
import { InfoBlock } from './InfoBlock/InfoBlock';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <InfoBlock />
    </div>
  );
};
