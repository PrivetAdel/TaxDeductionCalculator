 import React from 'react';

const Payment = ({value}) => {

  function paymentСalculation(value) {
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

  function inAYear(num) {
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

  const payments = paymentСalculation(value).map((item) => {
    return String(item)
      .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$& ');
    }
  );

  return (
    <fieldset className="popup-fieldset payment">
      <span className="payment-title">Итого можете внести в&nbsp;качестве досрочных:</span>
      <ul className="payment-list">
        {payments.map((item, index) => (
          <li key={index} className="payment-item">
            <input
              id={index}
              type="checkbox"
              className="payment-checkbox visually-hidden" />
            <label
              htmlFor={index}
              className="payment-label"
              tabIndex={index + 1}>
              <span>{item} рублей</span>
              &nbsp;
              <span className="payment-period">
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
