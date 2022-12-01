import React from 'react';
import styles from './MainPage.module.css';
import { Header } from '../Header/Header';
import { SearchBlock } from '../Header/SearchBlock/SearchBlock';
import { TableView } from '../TableView/TableView';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { useState } from 'react';

export const MainPage = () => {
  const [isActive, setIsAcive] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const handleClick = (e) => {
    if (!isActive) {
      setIsAcive(!isActive);
    }

    if (e.currentTarget.id === currentId) {
      return;
    }
    setCurrentId(e.currentTarget.id);
  };

  const handleClose = () => {
    setIsAcive(false);
  };

  return (
    <div className={styles._}>
      <Header />
      <SearchBlock />
      <TableView getId={handleClick} />
      {isActive && (
        <ModalWindow
          currentId={currentId}
          isActive={isActive}
          className={styles.modal}
          closeModal={handleClose}
        />
      )}
    </div>
  );
};
