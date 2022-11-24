export const PageSize = 20;

export const FILTER_TYPE = {
  any: 'Любой',
  new: 'Новый',
  calculation: 'Рассчет',
  confirmed: 'Подтвержден',
  postponed: 'Отложен',
  completed: 'Выполнен',
  canceled: 'Отменен',
};

export const HEADER_CELL = {
  orderNumber: {
    label: '#',
    isIcon: false,
    sort: false,
  },
  date: {
    label: 'Дата',
    isIcon: true,
    sort: true,
  },
  status: {
    label: 'Статус',
    isIcon: true,
    sort: true,
  },
  amount: {
    label: 'Позиция',
    isIcon: true,
    sort: true,
  },
  sum: {
    label: 'Сумма',
    isIcon: true,
    sort: true,
  },
  customer: {
    label: 'ФИО покупателя',
    isIcon: false,
    sort: false,
  },
};
