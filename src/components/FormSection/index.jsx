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
import ReactSelect from 'react-select';

function FormSection({ submitForm }) {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useFormContext();

  console.log('asdasd', watch());
  return (
    <div className="form-section">
      <form onSubmit={handleSubmit(submitForm)}>
        <Space direction="vertical" className="form-container">
          <div>Déjanos tus datos</div>
          <div>
            <Input.Group compact className="input-group">
              <Controller
                name="docType"
                control={control}
                rules={{
                  required: true,
                }}
                defaultValue={{ value: 'dni', label: 'DNI' }}
                render={({ field }) => (
                  <ReactSelect
                    className="select-input"
                    {...field}
                    options={[
                      { value: 'dni', label: 'DNI' },
                    ]}
              />
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
                render={({ field: { onChange } }) => (
                  <input
                    type="text"
                    className="input-data"
                    placeholder="Nro. de doc"
                    onChange={(e) => {
                      onChange(e);
                    }} />
                )}
              />
            </Input.Group>
            <div className="error-message-box">
              {errors && errors.doc && (
                <span className="error-message">
                  {errors.doc?.type === 'required' &&
                    `Por favor, ingresa tu ${watch('docType')}`}
                  {errors.doc?.type === 'minLength' && 'Se admite 8 números'}
                  {errors.doc?.type === 'maxLength' && 'Se admite 8 números como máximo'}
                  {errors.doc?.type === 'pattern' && 'Caracteres no permitidos'}
                </span>
              )}
            </div>
          </div>
          <div>
            <Controller
              control={control}
              name="phone"
              rules={{
                required: true,
                minLength: 9,
                maxLength: 9,
                pattern: /^[0-9]/i
              }}
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="input-data"
                  placeholder="Celular"
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              )}
            />
            <div className="error-message-box">
              {errors.phone && (
                <span className="error-message">
                  {errors.phone?.type === 'required' && 'Por favor, ingresa tu celular'}
                  {errors.phone?.type === 'minLength' && 'Se admite 9 números'}
                  {errors.phone?.type === 'maxLength' && 'Se admite 9 números como máximo'}
                  {errors.phone?.type === 'pattern' && 'Caracteres no permitidos'}
                </span>
              )}
            </div>
          </div>
          <div>
            <Controller
              control={control}
              name="numPlate"
              rules={{
                required: true,
                minLength: 6,
                maxLength: 6,
                pattern: /^[0-9 A-Za-z ÁÉÍÓÚáéíóúñÑ]/i
              }}
              render={({ field: { onChange } }) => (
                <input
                  type="text"
                  className="input-data"
                  placeholder="Placa"
                  onChange={(e) => {
                    onChange(e);
                  }} />
              )}
            />
            <div className="error-message-box">
              {errors.numPlate && (
                <span className="error-message">
                  {errors.numPlate?.type === 'required' && 'Por favor, ingresa tu placa'}
                  {errors.numPlate?.type === 'minLength' && 'Se admite 6 caracteres'}
                  {errors.numPlate?.type === 'maxLength' &&
                    'Se admite 6 caracteres como maximo'}
                  {errors.numPlate?.type === 'pattern' && 'Caracteres no permitidos'}
                </span>
              )}
            </div>
          </div>
          <div className="checkbox-box">
            <div>
              <Controller
                control={control}
                name="terms"
                rules={{
                  required: 'Por favor, acepta los terminos y condiciones',
                }}
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    checked={value}
                    className="checkbox-green"
                    onChange={(e) => {
                      onChange(e.target.checked);
                    }}>
                    Acepto la
                    {' '}
                    <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                      Política de Protección de Datos Personales
                    </a>
                    y los
                    {' '}
                    <a href="https://www.gmail.com/" target="_blank" rel="noreferrer">
                      Términos y Condiciones
                    </a>
                  </Checkbox>
                )}
              />
              <div className="error-message-box">
                {errors.terms && (
                  <span className="error-message">{errors.terms.message}</span>
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
