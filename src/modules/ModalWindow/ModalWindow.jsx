import React from 'react';
import styles from './ModalWindow.module.css';
import cn from 'classnames';
import { Icon } from '../../shared/Icons/Icon';
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
import { STATUS_TYPE } from '../TableView/OrderConstant/OrderConstant';
import { RadioModal } from '../TableView/OrderFooter/RadioModal/RadioModal';
import { setNewName } from '../../store/slice/ordersSlice';
import { Modal } from '../../shared/Modal/Modal';
import { getDate, setSum } from '../../shared/Function/Function';

export const ModalWindow = ({ currentId, isActive, className, closeModal }) => {
  const orders = useSelector(getOrderById(currentId));
  const dispatch = useDispatch();

  const ordersNumber = orders.orderNumber;
  const dateData = getDate(orders.date);
  const sum = orders.order.reduce((acc, current) => acc + current.price, 0);
  const [fioData, setFioData] = useState(orders.customer);
  const [statusData, setStatusData] = useState(orders.status);
  const [code, setCode] = useState('');
  const [isOpenChandeStatusModal, setChangeModal] = useState(false);
  const [modalClose, setModalClose] = useState(false);

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
  };

  const containerClassName = cn(styles.wrapper, className, {
    [styles.hidden]: !isActive,
  });

  const isCorrectName = fioData.length > 0;
  const isCorrectCode = code == 123;
  const isEmptyCode = code.length === 0;
  const isChanged = fioData !== orders.customer || statusData !== orders.status;

  let messageError = '';
  if (!isCorrectName && !isCorrectCode && !isEmptyCode) {
    messageError = 'Неверное имя или код!"';
  } else if (!isCorrectName) {
    messageError = 'Неверное имя!';
  } else if (!isCorrectCode && !isEmptyCode) {
    messageError = 'Неверный код!';
  }

  return (
    isActive && (
      <div className={containerClassName}>
        <ModalOrder className={cn(styles.modalOrder, className)}>
          <ModalHeader className={styles.modalHeader}>
            <span className={styles.request}>Заявка #{ordersNumber}</span>
            <button className={styles.buttonAction} onClick={handleModalClose}>
              <Icon name='xLarge' className={styles.actionIcon} />
            </button>
            <Modal
              isOpen={modalClose}
              className={styles.modalClose}
              label='Есть несохраненные изменения'
              textButton1='Сохранить'
              textButton2='Отмена'
              onFirstAction={handleSaveButton}
              onSecondAction={handleCloseModal}
              disabled={!isCorrectCode || !isCorrectName}
            />
          </ModalHeader>
          <ModalBody className={styles.body}>
            <div className={styles.container}>
              <span className={styles.text}>Дата и время заказа</span>
              <Input
                value={dateData}
                className={styles.input}
                disabled={true}
              />
            </div>
            <div className={styles.container}>
              <span className={styles.text}>ФИО покупателя</span>
              <Input
                value={fioData}
                className={styles.input}
                status={isCorrectName}
                onChange={handlerFIO}
                nameIcon='xMedium'
                onReset={handleResetFio}
              />
            </div>

            <Table className={styles.table}>
              <ModalWindowHeader />
              <ModalWindowBody className={styles.tableBody} orders={orders} />
              <ModalTableFooter>
                {'Итоговая сумма: ' + setSum(sum)}
              </ModalTableFooter>
            </Table>

            <div className={styles.container}>
              <span className={styles.text}>Уровень лояльности</span>
              <Input
                className={styles.input}
                disabled={true}
                value={'Новичек'}
              />
            </div>
            <div className={styles.container}>
              <span className={styles.text}>Статус заказа</span>
              <Input
                value={STATUS_TYPE[statusData]}
                className={styles.input}
                onVisible={handleSetOpenStatusModal}
                readOnly={true}
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
                status={isCorrectCode || isEmptyCode}
                className={styles.input}
                nameIcon='xMedium'
                onReset={handleResetCode}
              />
            </div>
          </ModalBody>
          <ModalFooter
            message={messageError}
            disabled={!isCorrectCode || !isCorrectName}
            className={styles.footer}
            nameIcon='xMedium'
            onClick={handleSaveButton}
          />
        </ModalOrder>
      </div>
    )
  );
};
