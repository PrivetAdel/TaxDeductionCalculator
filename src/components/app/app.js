import React, {useState} from 'react';
import Popup from '../popup';
import './app.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function showPopup() {
    setIsOpen((s) => !s)
  }

  return (
    <main className="main">
      <button
        className="btn main__btn"
        onClick={showPopup}>
        Налоговый вычет
      </button>
      {isOpen ? <Popup showPopup={showPopup}/> : null}
    </main>
  );
};

export default App;
