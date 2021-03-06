import React, {useState} from 'react';
import Payment from './Payment';
import Choice from './Choice';
import close from './close.svg';
import './Popup.css';

const addSpace = (value) => {
  return value
            .replace(/\s+|[^\d]/g, '')
            .replace(/(\d{1,3})(?=((\d{3})*)$)/g, ' $1')
            .replace(/^\s/g, '')
};

const addRub = (value) => {
  if (!value) {
    return value.replace(/ ₽/g, '');
  }

  return (value + ' ₽').replace(/[^\d ₽]| ₽(?!$)/g, '');
};

const сleanAValue = (value) => {
  return value.replace(/\D/g, '');
};

const Popup = ({showPopup}) => {
  const [valueSalary, setValueSalary] = useState('');
  const [isCalculate, setCalculate] = useState(false);
  const [isEmpty, setEmpty] = useState(false);
  const [isMinLengthError, setMinLengthError] = useState(false);
  const [borderColor, setBorderColor] = useState('#DFE3E6');

  const сhangeSalary = (evt) => {
    setValueSalary(addRub(addSpace(evt.target.value)));
    setCalculate(false);
    setEmpty(false);
    setMinLengthError(false);
    setBorderColor('#DFE3E6');
  };

  const calculateSumPay = (evt) => {
    evt.preventDefault();

    (valueSalary.length >= 6) ? setCalculate(true) : setCalculate(false);
    valueSalary ? setEmpty(false) : setEmpty(true);
    (valueSalary.length >= 6) ? setMinLengthError(false) : setMinLengthError(true);
    (valueSalary.length >= 6) ? setBorderColor('#DFE3E6') : setBorderColor('#EA0029');
  };

  const submitForm = (evt) => {
    evt.preventDefault();
  };

  const renderPayments = () =>{
    return <Payment value={сleanAValue(valueSalary)} />
  };

  const showErrorEmpty = () => {
    return <p className="salary__error--text">Поле обязательно для заполнения</p>
  };

  const showErrorMin = () => {
    return <p className="salary__error--text">Минимальная сумма для рассчета 1 000 ₽</p>
  };

  return (
    <div className="overlay">
      <section className="popup">
        <div className="popup__header">
          <h2 className="popup__title">Налоговый вычет</h2>
          <button
            className="btn popup__btn-close"
            onClick={showPopup}>
            <img src={close} alt="close" />
          </button>
        </div>

        <p className="popup__description">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не&nbsp;более&nbsp;13% от своего официального годового дохода.</p>

        <form className="popup__form">
          <fieldset className="popup__fieldset salary">
            <label
              className="salary__label"
              htmlFor="salary">
              Ваша зарплата в месяц
            </label>
            <input
              type="text"
              inputMode="numeric"
              id="salary"
              className="salary__input"
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
              className="btn salary__btn-calculate"
              onClick={calculateSumPay}>
              Рассчитать
            </button>
          </fieldset>

          {isCalculate ? renderPayments() : null}
          <Choice />

          <button
            className="btn popup__btn-add"
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
