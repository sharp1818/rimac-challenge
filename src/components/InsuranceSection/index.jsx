import { ArrowLeftOutlined } from '@ant-design/icons';
import useScreenSize from '../../hooks/useScreenSize';
import Counter from '../Counter';

import './InsuranceSection.scss';

function InsuranceSection() {
  const { width } = useScreenSize();
  return (
    <div className="insurance-container">
      <div className="status-box">
        <ArrowLeftOutlined />
        <div>{width <= 360 ? 'PASO 2 DE 2' : 'VOLVER'}</div>
        <div className="purple-line" />
      </div>
      <div className="info-box">
        <div className="greeting-message">
          ¡Hola,
          <span>Adrian!</span>
        </div>
        <div className="info-message">Conoce las coberturas para tu plan</div>
        <div className="car-info-box">
          <div>Placa: AMQ-666</div>
          <div>Wokswagen 2019</div>
          <div>Golf</div>
        </div>
      </div>
      <div className="input-number-box">
        <div className="intput-number-rules">
          <div>Indica la suma asegurada</div>
          <div>
            <div>MIN $12,500</div>
            {' | '}
            <div>MAX $16,500</div>
          </div>
        </div>
        <div className="input-number-display">
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default InsuranceSection;
