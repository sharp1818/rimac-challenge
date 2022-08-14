/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react';
import './FormSection.scss';
import {
  Form, Input, Select, Checkbox, Space,
} from 'antd';
import 'antd/dist/antd.min.css';
import RedButton from '../RedButton';
import FormContext from '../../context/Form/FormContext';

function FormSection() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const {
    next, nextStep,
  } = useContext(FormContext);

  const nextPage = () => {
    next();
    nextStep();
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
      <form form={form}>
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
      </form>
    </div>
  );
}

export default FormSection;
