 import React from 'react';

 const inAYear = (num) => {
  switch(true) {
    case (num % 10 === 2 && num < 10):
      return `во ${num}-ой год`;
    case (num % 10 === 3 && (num < 10 || num > 20)):
      return `в ${num}-ий год`;
    case (num % 10 === 6 && (num < 10 || num > 20)):
      return `в ${num}-ой год`;
    case (num % 10 === 7 && (num < 10 || num > 20)):
      return `в ${num}-ой год`;
    case (num % 10 === 8 && (num < 10 || num > 20)):
      return `в ${num}-ой год`;
    case (num % 10 === 2 && num > 20):
      return `в ${num}-ой год`;
    default:
      return `в ${num}-ый год`;
  }
};

const Payment = ({value}) => {
  const paymentСalculation = (value) => {
    const paymentItems = [];
    const maxPay = 260000;
    const paymentAYear = Math.floor((value * 12) * 0.13);

    if (paymentAYear >= maxPay) {
      paymentItems.push(maxPay);
    } else {
      const items = Math.floor(maxPay / paymentAYear);
      const remainder = maxPay % paymentAYear;
      let i = 0;

      while (i < items) {
        paymentItems.push(paymentAYear);
        i++;
      };

      paymentItems.push(remainder);
    }

    return paymentItems;
  };

  const payments = paymentСalculation(value).map((item) => {
    return String(item)
      .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$& ');
    }
  );

  return (
    <fieldset className="popup__fieldset payment">
      <span className="payment__title">Итого можете внести в&nbsp;качестве досрочных:</span>
      <ul className="payment__list">
        {payments.map((item, index) => (
          <li key={index} className="payment__item">
            <input
              id={index}
              type="checkbox"
              className="payment__checkbox visually-hidden"
              defaultChecked />
            <label
              htmlFor={index}
              className="payment__label"
              tabIndex={index + 1}>
              <span>{item} рублей</span>
              &nbsp;
              <span className="payment__period">
                {inAYear(index + 1)}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default Payment;
