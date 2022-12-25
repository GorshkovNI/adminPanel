import React from 'react';
import styles from './ModalWindow.module.css';
import cn from 'classnames';
import { ModalHeader } from '../../shared/ModalOrder/ModalHeader/ModalHeader';
import { ModalOrder } from '../../shared/ModalOrder/ModalOrder';
import { ModalBody } from '../../shared/ModalOrder/ModalBody/ModalBody';
import { Input } from '../../shared/Input/Input';
import { Table } from '../../shared/Table/Table';
import { ModalWindowHeader } from './ModalWindowHeader/ModalWindowHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../store/selector/selector';
import { ModalWindowBody } from './ModalWindowBody/ModalWindowBody';
import { ModalTableFooter } from './ModalTableFooter/ModalTableFooter';
import { ModalFooter } from './ModalFooter/ModalFooter';
import { useState } from 'react';
import {
  LOYALITY,
  STATUS_TYPE,
} from '../TableView/OrderConstant/OrderConstant';
import { RadioModal } from '../TableView/OrderFooter/RadioModal/RadioModal';
import { setNewName } from '../../store/slice/ordersSlice';
import { Modal } from '../../shared/Modal/Modal';
import { Button } from '../../shared/Button/Button';
import { parseDate } from '../../utils/parseDate';
import { formatMoney } from '../../utils/formatMoney';

export const ModalWindow = ({ currentId, className, closeModal }) => {
  const [order, sum] = useSelector(getOrderById(currentId));
  const dispatch = useDispatch();

  const { ordersNumber, loyality, status, customer } = order;
  const dateData = parseDate(order.date);
  const [fioData, setFioData] = useState(customer);
  const [statusData, setStatusData] = useState(status);
  const [code, setCode] = useState('');
  const [isOpenChandeStatusModal, setChangeModal] = useState(false);
  const [modalClose, setModalClose] = useState(false);

  const isCorrectName = fioData.length > 0;
  const isCorrectCode = code == 123;
  const isEmptyCode = code.length === 0;
  const isChanged = fioData !== order.customer || statusData !== order.status;

  const errorChecking = () => {
    if (!isCorrectName && !isCorrectCode && !isEmptyCode) {
      return 'Неверное имя или код!';
    } else if (!isCorrectName) {
      return 'Неверное имя!';
    } else if (!isCorrectCode && !isEmptyCode) {
      return 'Неверный код!';
    }
  };

  const handleSetOpenStatusModal = () => {
    setChangeModal(!isOpenChandeStatusModal);
  };

  const handleChangeStatus = (e) => {
    setStatusData(e.target.value);
    setChangeModal(false);
  };

  const handleModalClose = () => {
    if (isChanged) {
      setModalClose(true);
    } else {
      closeModal();
    }
  };

  const handleCloseModal = () => {
    setModalClose(false);
  };

  const handlerFIO = (e) => {
    setFioData(e.target.value);
  };

  const handleResetFio = () => {
    setFioData('');
  };

  const handleCode = (e) => {
    setCode(e.target.value);
  };

  const handleResetCode = () => {
    setCode('');
  };

  const handleSaveButton = () => {
    dispatch(setNewName({ currentId, fioData, statusData }));
    closeModal();
  };

  const handleResetData = () => {
    closeModal();
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <ModalOrder className={cn(styles.modalOrder, className)}>
        <ModalHeader className={styles.modalHeader}>
          <span className={styles.request}>Заявка #{ordersNumber}</span>
          <Button
            className={styles.buttonAction}
            onClick={handleModalClose}
            icon='xLarge'
          ></Button>
          <Modal
            isOpen={modalClose}
            className={styles.modalClose}
            label='Есть несохраненные изменения'
            textButton1='Сбросить'
            textButton2='Остаться'
            onFirstAction={handleResetData}
            onSecondAction={handleCloseModal}
          />
        </ModalHeader>
        <ModalBody className={styles.body}>
          <div className={styles.container}>
            <span className={styles.text}>Дата и время заказа</span>
            <Input value={dateData} className={styles.input} disabled={true} />
          </div>
          <div className={styles.container}>
            <span className={styles.text}>ФИО покупателя</span>
            <Input
              value={fioData}
              className={styles.input}
              incorrect={isCorrectName}
              onChange={handlerFIO}
              nameIcon='xMedium'
              onReset={handleResetFio}
            />
          </div>

          <Table className={styles.table}>
            <ModalWindowHeader />
            <ModalWindowBody className={styles.tableBody} orders={order} />
            <ModalTableFooter>
              {'Итоговая сумма: ' + formatMoney(sum)}
            </ModalTableFooter>
          </Table>

          <div className={styles.container}>
            <span className={styles.text}>Уровень лояльности</span>
            <Input
              className={styles.input}
              disabled={true}
              value={LOYALITY[loyality]}
            />
          </div>
          <div className={styles.container}>
            <span className={styles.text}>Статус заказа</span>
            <Input
              value={STATUS_TYPE[statusData]}
              className={styles.input}
              onVisible={handleSetOpenStatusModal}
              rotate={isOpenChandeStatusModal}
              readOnly={true}
              nameIcon='vArrow'
            />
            <RadioModal
              className={styles.radioModal}
              isOpen={isOpenChandeStatusModal}
              onClick={handleChangeStatus}
            />
          </div>
          <div className={styles.container}>
            <span className={styles.text}>Код подтверждения</span>
            <Input
              value={code}
              onChange={handleCode}
              incorrect={isCorrectCode || isEmptyCode}
              className={styles.input}
              nameIcon='xMedium'
              onReset={handleResetCode}
            />
          </div>
        </ModalBody>
        <ModalFooter
          message={errorChecking()}
          disabled={!isCorrectCode || !isCorrectName}
          className={styles.footer}
          nameIcon='xMedium'
          onClick={handleSaveButton}
        />
      </ModalOrder>
    </div>
  );
};
