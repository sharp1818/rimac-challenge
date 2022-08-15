import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import FormContext from './FormContext';

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

  const FormContextProviderValue = useMemo(
    () => ({
      personalData,
      setPersonalData,
      order,
      setOrder,
    }),
    [
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
