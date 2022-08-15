import { useContext } from 'react';
import FormContext from '../../context/Form/FormContext';
import './InsuranceSection.scss';

function InsuranceSection() {
  const {
    prev, prevStep,
  } = useContext(FormContext);

  const backPage = () => {
    prev();
    prevStep();
  };

  return (
    <div>
      <button type="button" onClick={() => { backPage(); }}>
        back
      </button>
      <div>
        <div>
          ¡Hola,
          {' '}
          <span>Juan!</span>
        </div>
        <div>Conoce las coberturas para tu plan</div>
      </div>
      <div>
        <div>Placa: AMQ-666</div>
        <div>Wokswagen 2019</div>
        <div>Golf</div>
      </div>
      <div>
        <div>
          <div>Indica la suma asegurada</div>
          <div>
            <div>MIN $12,500</div>
            <div>MAX $16,500</div>
          </div>
        </div>
        <div>CONTADOR</div>
      </div>
    </div>
  );
}

export default InsuranceSection;
