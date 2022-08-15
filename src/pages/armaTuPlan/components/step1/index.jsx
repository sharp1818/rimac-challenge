/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormSection from '../../../../components/FormSection';
import TrackingSection from '../../../../components/TrackingSection';
import FormContext from '../../../../context/Form/FormContext';
// eslint-disable-next-line import/named
import { submitForm as submit } from '../../../../services/api';
import './styles.scss';

function Step1() {
  const navigate = useNavigate();
  const { personalData, setPersonalData } = useContext(FormContext);
  const { docs, docType, doc, phone, numPlate, terms } = personalData;
  const { watch } = useFormContext();

  const submitForm = (data) => {
    try {
      const { inputDni, inputNumPlate, inputPhone } = data;
      setPersonalData(watch());
      submit({ inputDni, inputNumPlate, inputPhone }).then((res) => {
        if (res.status >= 200 && res.status < 400) {
          navigate('/arma-tu-plan/step_2');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-component-layout">
      <div className="background-tracking-section">
        <TrackingSection />
      </div>
      <FormSection {...{ docs, docType, doc, phone, numPlate, terms, submitForm }} />
    </div>
  );
}

export default Step1;
