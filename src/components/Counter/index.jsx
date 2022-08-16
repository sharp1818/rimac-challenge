import { useState } from 'react';
import './Counter.scss';

function Counter() {
  const [insurance, setInsurance] = useState(16000);
  const increase = () => {
    setInsurance(insurance + 100);
  };
  const decrease = () => {
    setInsurance(insurance - 100);
  };

  return (
    <div className="counter-container">
      <button type="button" onClick={() => { decrease(); }}>-</button>
      <div>
        $
        {' '}
        <input type="number" min={12500} max={16500} readOnly value={insurance} className="display-counter" />
      </div>
      <button type="button" onClick={() => { increase(); }}>+</button>
    </div>
  );
}

export default Counter;
