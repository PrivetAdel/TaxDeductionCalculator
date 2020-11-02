import React, {useState} from 'react';
import Payment from './payment';
import Choice from './choice';
import close from './close.svg';
import './popup.css';

function addSpace(value) {
  return value
            .replace(/\s+|[^\d]/g, '')
            .replace(/(\d{1,3})(?=((\d{3})*)$)/g, ' $1')
            .replace(/^\s/g, '')
};

function addRub(value) {
  if (!value) {
    return value.replace(/ ₽/g, '');
  }

  return (value + ' ₽').replace(/[^\d ₽]| ₽(?!$)/g, '');
};

function сleanAValue(value) {
  return value.replace(/\D/g, '');
};

const Popup = ({showPopup}) => {
  const [valueSalary, setValueSalary] = useState('');
  const [isCalculate, setCalculate] = useState(false);
  const [isEmpty, setEmpty] = useState(false);
  const [isMinLengthError, setMinLengthError] = useState(false);
  const [borderColor, setBorderColor] = useState('#DFE3E6');

  function сhangeSalary(evt) {
    setValueSalary(addRub(addSpace(evt.target.value)));
    setCalculate(false);
    setEmpty(false);
    setMinLengthError(false);
    setBorderColor('#DFE3E6');
  };

  function calculateSumPay(evt) {
    evt.preventDefault();

    (valueSalary.length >= 6) ? setCalculate(true) : setCalculate(false);
    valueSalary ? setEmpty(false) : setEmpty(true);
    (valueSalary.length >= 6) ? setMinLengthError(false) : setMinLengthError(true);
    (valueSalary.length >= 6) ? setBorderColor('#DFE3E6') : setBorderColor('#EA0029');
  };

  function submitForm(evt) {
    evt.preventDefault();
  };

  function renderPayments() {
    return <Payment value={сleanAValue(valueSalary)} />
  };

  function showErrorEmpty() {
    return <p className="salary-error">Поле обязательно для заполнения</p>
  };

  function showErrorMin() {
    return <p className="salary-error">Минимальная сумма для рассчета 1 000 ₽</p>
  };

  return (
    <div className="overlay">
      <section className="popup">
        <div className="popup-header">
          <h2 className="popup-title">Налоговый вычет</h2>
          <button
            className="btn btn-popup-close"
            onClick={showPopup}>
            <img src={close} alt="close" />
          </button>
        </div>

        <p className="popup-description">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не&nbsp;более&nbsp;13% от своего официального годового дохода.</p>

        <form className="popup-form">
          <fieldset className="popup-fieldset salary">
            <label
              className="salary-label"
              htmlFor="salary">
              Ваша зарплата в месяц
            </label>
            <input
              type="text"
              inputMode="numeric"
              id="salary"
              className="salary-input"
              placeholder="Введите данные"
              autoComplete="off"
              value={valueSalary}
              onChange={сhangeSalary}
              style={{borderColor: borderColor}}
              autoFocus
              required />
            {isEmpty ? showErrorEmpty() : null}
            {(isMinLengthError && !isEmpty) ? showErrorMin() : null}
            <button
              className="btn btn-calculate-salary"
              onClick={calculateSumPay}>
              Рассчитать
            </button>
          </fieldset>

          {isCalculate ? renderPayments() : null}
          <Choice />

          <button
            className="btn btn-add"
            onClick={submitForm}
            type="submit">
            Добавить
          </button>
        </form>
      </section>
    </div>
  );
}

export default Popup;
