import React from 'react';

const Choice = () => {
  return (
    <fieldset className="popup-fieldset choice">
      <span className="choice-title">Что уменьшаем?</span>
      <div className="choice-wrapper">
        <input
          type="radio"
          name="choice-radio"
          className="choice-radio visually-hidden"
          id="payment"
          defaultChecked />
        <label
          className="choice-label"
          htmlFor="payment"
          tabIndex="6">
          Платёж
        </label>

        <input
          type="radio"
          name="choice-radio"
          className="choice-radio visually-hidden"
          id="date" />
        <label
          className="choice-label"
          htmlFor="date"
          tabIndex="7">
          Срок
        </label>
      </div>
    </fieldset>
  );
};

export default Choice;
