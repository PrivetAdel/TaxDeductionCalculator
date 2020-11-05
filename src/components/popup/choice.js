import React from 'react';

const Choice = () => {
  return (
    <fieldset className="popup__fieldset choice">
      <span className="choice__title">Что уменьшаем?</span>
      <div className="choice__wrapper">
        <input
          type="radio"
          name="choice-radio"
          className="choice__radio visually-hidden"
          id="payment"
          defaultChecked />
        <label
          className="choice__label"
          htmlFor="payment"
          tabIndex="6">
          Платёж
        </label>

        <input
          type="radio"
          name="choice-radio"
          className="choice__radio visually-hidden"
          id="date" />
        <label
          className="choice__label"
          htmlFor="date"
          tabIndex="7">
          Срок
        </label>
      </div>
    </fieldset>
  );
};

export default Choice;
