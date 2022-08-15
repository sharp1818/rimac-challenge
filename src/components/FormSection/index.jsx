/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react';
import axios from 'axios';
import './FormSection.scss';
import { useForm, Controller } from 'react-hook-form';
import { Input, Checkbox, Space } from 'antd';
import 'antd/dist/antd.min.css';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import FormContext from '../../context/Form/FormContext';

function FormSection() {
  const { personalData, setPersonalData } = useContext(FormContext);

  // eslint-disable-next-line object-curly-newline
  const { docs, docType, doc, phone, numPlate, terms } = personalData;

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const carInfo = JSON.stringify({
    doc,
    phone,
    numPlate
  });

  const navigate = useNavigate();
  const CreateForm = async () => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', carInfo, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    if (res.status === 201) {
      // next();
      // nextStep();
      navigate('/arma-tu-plan/step_2');
    }
  };
  const SendForm = () => {
    try {
      CreateForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit(SendForm)}>
        <Space direction="vertical" className="form-container">
          <div>Déjanos tus datos</div>
          <div>
            <Input.Group compact className="input-group">
              <Select
                defaultValue={docType}
                className="select-input"
                options={docs}
                onChange={(e) => {
                  setPersonalData({
                    ...personalData,
                    docType: e
                  });
                }}
              />
              <Controller
                control={control}
                name="inputDni"
                defaultValue={doc}
                rules={{
                  required: true,
                  minLength: 8,
                  maxLength: 8,
                  pattern: /^[0-9]/i
                }}
                render={({ field: { onChange } }) => (
                  <input
                    type="text"
                    defaultValue={doc}
                    className="input-data"
                    placeholder="Nro. de doc"
                    onChange={(e) => {
                      onChange(e);
                      setPersonalData({
                        ...personalData,
                        doc: e.target.value
                      });
                    }}
                  />
                )}
              />
            </Input.Group>
            <div className="error-message-box">
              {errors.inputDni && (
                <span className="error-message">
                  {errors.inputDni?.type === 'required' && `Por favor, ingresa tu ${docType.label}`}
                  {errors.inputDni?.type === 'minLength' && 'Se admite 8 números'}
                  {errors.inputDni?.type === 'maxLength' && 'Se admite 8 números como máximo'}
                  {errors.inputDni?.type === 'pattern' && 'Caracteres no permitidos'}
                </span>
              )}
            </div>
          </div>
          <div>
            <Controller
              control={control}
              name="inputPhone"
              defaultValue={phone}
              rules={{
                required: true,
                minLength: 9,
                maxLength: 9,
                pattern: /^[0-9]/i
              }}
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  defaultValue={phone}
                  className="input-data"
                  placeholder="Celular"
                  onChange={(e) => {
                    onChange(e);
                    setPersonalData({
                      ...personalData,
                      phone: e.target.value
                    });
                  }}
                />
              )}
            />
            <div className="error-message-box">
              {errors.inputPhone && (
                <span className="error-message">
                  {errors.inputPhone?.type === 'required' && 'Por favor, ingresa tu celular'}
                  {errors.inputPhone?.type === 'minLength' && 'Se admite 9 números'}
                  {errors.inputPhone?.type === 'maxLength' && 'Se admite 9 números como máximo'}
                  {errors.inputPhone?.type === 'pattern' && 'Caracteres no permitidos'}
                </span>
              )}
            </div>
          </div>
          <div>
            <Controller
              control={control}
              name="inputNumPlate"
              defaultValue={numPlate}
              rules={{
                required: true,
                minLength: 6,
                maxLength: 6,
                pattern: /^[0-9 A-Za-z ÁÉÍÓÚáéíóúñÑ]/i
              }}
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  defaultValue={numPlate}
                  className="input-data"
                  placeholder="Placa"
                  onChange={(e) => {
                    onChange(e);
                    setPersonalData({
                      ...personalData,
                      numPlate: e.target.value
                    });
                  }}
                />
              )}
            />
            <div className="error-message-box">
              {errors.inputNumPlate && (
                <span className="error-message">
                  {errors.inputNumPlate?.type === 'required' && 'Por favor, ingresa tu placa'}
                  {errors.inputNumPlate?.type === 'minLength' && 'Se admite 6 caracteres'}
                  {errors.inputNumPlate?.type === 'maxLength' &&
                    'Se admite 6 caracteres como maximo'}
                  {errors.inputNumPlate?.type === 'pattern' && 'Caracteres no permitidos'}
                </span>
              )}
            </div>
          </div>
          <div className="checkbox-box">
            <div>
              <Controller
                control={control}
                defaultValue={terms}
                name="inputTerms"
                rules={{
                  required: 'Por favor, acepta los terminos y condiciones'
                }}
                render={({ field: { onChange } }) => (
                  <Checkbox
                    checked={terms}
                    className="checkbox-green"
                    onChange={(e) => {
                      onChange(e);
                      setPersonalData({
                        ...personalData,
                        terms: e.target.checked
                      });
                    }}>
                    Acepto la
                    <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                      Política de Protección de Datos Personales
                    </a>
                    y los
                    <a href="https://www.gmail.com/" target="_blank" rel="noreferrer">
                      Términos y Condiciones
                    </a>
                  </Checkbox>
                )}
              />
              <div className="error-message-box">
                {errors.inputTerms && (
                  <span className="error-message">{errors.inputTerms.message}</span>
                )}
              </div>
            </div>
          </div>
          <button type="submit" className="red-button">
            COTÍZALO
          </button>
        </Space>
      </form>
    </div>
  );
}

export default FormSection;
