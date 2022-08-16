/* eslint-disable react/jsx-closing-bracket-location */
import { CheckOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './AmountSection.scss';

function AmountSection() {
  const navigate = useNavigate();
  return (
    <div className="amount-section">
      <div className="amount-info">
        <div>MONTO</div>
        <div>$35.00</div>
        <div>MENSUAL</div>
      </div>
      <div className="car-services">
        <div className="title">El precio incluye:</div>
        <div>
          <CheckOutlined />
          <span>LLanta de repuesto</span>
        </div>
        <div>
          <CheckOutlined />
          <span>Análisis de motor</span>
        </div>
        <div>
          <CheckOutlined />
          <span>Aros gratis</span>
        </div>
      </div>
      <button
        type="button"
        className="red-button"
        onClick={() => navigate('/arma-tu-plan/confirmation')}>
        LO QUIERO
      </button>
    </div>
  );
}

export default AmountSection;
