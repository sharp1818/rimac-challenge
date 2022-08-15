/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import './FormSection.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { Input, Checkbox, Space } from 'antd';
import 'antd/dist/antd.min.css';
import Select from 'react-select';

function FormSection({ docs, docType, phone, numPlate, submitForm }) {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useFormContext();

  console.log('asdasd', watch(phone));
  return (
    <div className="form-section">
      <form onSubmit={handleSubmit(submitForm)}>
        <Space direction="vertical" className="form-container">
          <div>Déjanos tus datos</div>
          <div>
            <Input.Group compact className="input-group">
              <Controller
                control={control}
                name="doc"
                rules={{
                  required: true,
                  minLength: 8,
                  maxLength: 8,
                  pattern: /^[0-9]/i
                }}
                render={({ field }) => (
                  <Select className="select-input" options={docs} {...field} />
                )}
              />
              <Controller
                control={control}
                name="doc"
                rules={{
                  required: true,
                  minLength: 8,
                  maxLength: 8,
                  pattern: /^[0-9]/i
                }}
                render={({ field }) => (
                  <input type="text" className="input-data" placeholder="Nro. de doc" {...field} />
                )}
              />
            </Input.Group>
            <div className="error-message-box">
              {errors && errors.inputDni && (
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
              name="phone"
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
              name="numPlate"
              defaultValue={numPlate}
              rules={{
                required: true,
                minLength: 6,
                maxLength: 6,
                pattern: /^[0-9 A-Za-z ÁÉÍÓÚáéíóúñÑ]/i
              }}
              render={({ field }) => (
                <input
                  type="text"
                  defaultValue={numPlate}
                  className="input-data"
                  placeholder="Placa"
                  {...field}
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
              {/* <Controller
                control={control}
                name="terms"
                rules={{
                  required: 'Por favor, acepta los terminos y condiciones'
                }}
                render={({ restPropsFields }) => (
                  <Checkbox {...restPropsFields}>
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
              /> */}
              <Controller
                control={control}
                name="terms"
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    checked={value}
                    onChange={(e) => {
                      onChange(e.target.checked);
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
