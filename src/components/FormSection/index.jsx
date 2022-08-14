/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react';
import './FormSection.scss';
import {
  Form, Input, Select, Checkbox, Space,
} from 'antd';
import 'antd/dist/antd.min.css';
import * as Yup from 'yup';
import RedButton from '../RedButton';
import FormContext from '../../context/Form/FormContext';

function FormSection() {
  const {
    next, nextStep,
  } = useContext(FormContext);

  const nextPage = () => {
    next();
    nextStep();
  };

  const schema = Yup.object().shape({
    doc: Yup.string()
      .required('Ingresa tu dni')
      .min(8, 'Máximo 8 números')
      .max(8, 'Máximo 8 números'),
    phone: Yup.string()
      .required('Ingresa tu celular')
      .min(9, 'Maximo 9 numeros')
      .max(9, 'Máximo 9 números'),
    numberPlate: Yup.string()
      .required('Ingresa número de placa.')
      .min(6, 'Maximo 6 caracteres')
      .max(6, 'Máximo 6 caracteres'),
    terms: Yup.bool()
      .required('Por favor, aceptar terminos y condiciones'),
  });

  const yupSync = {
    async validator({ field }, value) {
      await schema.validateSyncAt(field, { [field]: value });
    },
  };

  const [form] = Form.useForm();

  const { Option } = Select;
  const selectBefore = (
    <Select defaultValue="DNI" className="select-before" listItemHeight={60} listHeight={60}>
      <Option value="DNI">DNI</Option>
    </Select>
  );
  return (
    <div className="form-section">
      <Form form={form}>
        <Space direction="vertical" className="form-container">
          <div>Déjanos tus datos</div>
          <Form.Item name="doc" rules={[yupSync]}>
            <Input allowClear addonBefore={selectBefore} placeholder="Nro. de doc" />
          </Form.Item>
          <Form.Item name="phone" rules={[yupSync]}>
            <Input allowClear status="" placeholder="Celular" />
          </Form.Item>
          <Form.Item name="numberPlate" rules={[yupSync]}>
            <Input allowClear status="" placeholder="Placa" />
          </Form.Item>
          <Form.Item name="terms" valuePropName="checked" rules={[yupSync]}>
            <Checkbox className="checkbox-green">
              Acepto la
              {' '}
              <a href="https://www.google.com/" target="_blank" rel="noreferrer">Política de Protección de Datos Personales</a>
              {' '}
              y los
              {' '}
              <a href="https://www.gmail.com/" target="_blank" rel="noreferrer">Términos y Condiciones</a>
            </Checkbox>
          </Form.Item>
          <RedButton message="COTÍZALO" method={nextPage} className="submit-button" />
        </Space>
      </Form>
    </div>
  );
}

export default FormSection;
