/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
import { useNavigate } from 'react-router-dom';
import FormSection from '../../../../components/FormSection';
import TrackingSection from '../../../../components/TrackingSection';
// eslint-disable-next-line import/named
import { submitForm as submit } from '../../../../services/api';
import './styles.scss';

function Step1() {
  const navigate = useNavigate();
  const docs = ['input1', 'input2'];

  const submitForm = (data) => {
    try {
      const { inputDni, inputNumPlate, inputPhone } = data;
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
      <FormSection {...{ docs, submitForm }} />
    </div>
  );
}

export default Step1;
