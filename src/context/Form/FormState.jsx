import { useState, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import FormContext from './FormContext';
import FormReducer from './FormReducer';

function FormState({ children }) {
  const [personalData, setPersonalData] = useState({
    docs: [{ id: 1, value: 'dni', label: 'DNI' }],
    docType: { id: 1, value: 'dni', label: 'DNI' },
    doc: '',
    phone: '',
    numPlate: '',
    terms: null,
  });
  const [order, setOrder] = useState({
    insurance: '',
    amount: '',
    tireTheft: null,
    carCrash: null,
    runOver: null,
  });

  const initialState = {
    currentStep: 0,
    current: 0,
  };
  const [state, dispatch] = useReducer(FormReducer, initialState);

  const initial = () => {
    dispatch({
      type: 'INITIAL',
      payload: 0,
    });
  };

  const next = () => {
    dispatch({
      type: 'NEXT',
      payload: state.current + 1,
    });
  };

  const prev = () => {
    dispatch({
      type: 'PREV',
      payload: state.current - 1,
    });
  };
  const initialStep = () => {
    dispatch({
      type: 'INITIAL_STEP',
      payload: 0,
    });
  };
  const nextStep = () => {
    dispatch({
      type: 'NEXT_STEP',
      payload: state.currentStep + 1,
    });
  };

  const prevStep = () => {
    dispatch({
      type: 'PREV_STEP',
      payload: state.currentStep - 1,
    });
  };

  const finalStep = () => {
    dispatch({
      type: 'FINAL_STEP',
      payload: 3,
    });
  };

  const FormContextProviderValue = useMemo(
    () => ({
      current: state.current,
      initial,
      next,
      prev,
      currentStep: state.currentStep,
      initialStep,
      nextStep,
      prevStep,
      finalStep,
      personalData,
      setPersonalData,
      order,
      setOrder,
    }),
    [
      state.current,
      initial,
      next,
      prev,
      state.currentStep,
      initialStep,
      nextStep,
      prevStep,
      finalStep,
      personalData,
      setPersonalData,
      order,
      setOrder,
    ],
  );

  return (
    <FormContext.Provider value={FormContextProviderValue}>
      {children}
    </FormContext.Provider>
  );
}
FormState.propTypes = {
  children: PropTypes.element.isRequired,
};
export default FormState;
