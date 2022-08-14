import { useContext } from 'react';
import FormContext from '../../context/Form/FormContext';

function CreatePlanComponent() {
  const {
    prev, next, prevStep, nextStep,
  } = useContext(FormContext);

  const nextPage = () => {
    next();
    nextStep();
  };

  const backPage = () => {
    prev();
    prevStep();
  };

  return (
    <>
      <div>CreatePlanComponent</div>
      <button type="button" onClick={() => { backPage(); }}>
        back
      </button>
      <button type="button" onClick={() => { nextPage(); }}>
        next
      </button>
    </>
  );
}

export default CreatePlanComponent;
