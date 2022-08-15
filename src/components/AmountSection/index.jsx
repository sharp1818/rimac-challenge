import React, { useContext } from 'react';
import FormContext from '../../context/Form/FormContext';
import './AmountSection.scss';

function AmountSection() {
  const {
    next, nextStep,
  } = useContext(FormContext);

  const nextPage = () => {
    next();
    nextStep();
  };

  return (
    <div>
      <div>
        <div>MONTO</div>
        <div>$35.00</div>
        <div>mensuales</div>
      </div>
      <div>
        <div>check1</div>
        <div>check2</div>
        <div>check3</div>
      </div>
      <button type="button" className="red-button" onClick={() => { nextPage(); }}>LO QUIERO</button>
    </div>
  );
}

export default AmountSection;
