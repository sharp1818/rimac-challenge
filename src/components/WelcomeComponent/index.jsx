import { useContext } from 'react';
import FormContext from '../../context/Form/FormContext';

function WelcomeComponent() {
  const { prev, prevStep } = useContext(FormContext);

  const backPage = () => {
    prev();
    prevStep();
  };

  return (
    <>
      <div>WelcomeComponent</div>
      <button type="button" onClick={() => { backPage(); }}>
        back
      </button>
    </>
  );
}

export default WelcomeComponent;
