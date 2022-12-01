export const setSum = (number) => {
  let value = String(number).replace(/[^0-9]/g, '');
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return value + ' ₽';
};

export const getDate = (date) => {
  const newDate = new Date(date);
  const day =
    newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
  const month =
    newDate.getMonth() < 9
      ? `0${newDate.getMonth() + 1}`
      : newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${day}.${month}.${year}`;
};
