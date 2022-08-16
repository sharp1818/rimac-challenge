import { CheckOutlined } from '@ant-design/icons';
import './AmountSection.scss';

function AmountSection() {
  return (
    <div className="amount-section">
      <div className="amount-info">
        <div>MONTO</div>
        <div>$35.00</div>
        <div>MENSUAL</div>
      </div>
      <div className="car-services">
        <div>
          <CheckOutlined />
          {' '}
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
      <button type="button" className="red-button">LO QUIERO</button>
    </div>
  );
}

export default AmountSection;
