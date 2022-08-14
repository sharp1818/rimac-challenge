import './TrackingSection.scss';
import { GetFormImage } from '../../utils/helper';

function TrackingSection() {
  return (
    <div className="tracking-section">
      <div className="icon-girl-desktop">
        <img src={GetFormImage('ICON_GIRL')} alt="ICON_GIRL" />
      </div>
      <div className="info-container">
        <div>¡NUEVO!</div>
        <div>
          Seguro
          {' '}
          <span>Vehicular</span>
        </div>
        <div>Tracking</div>
        <div>Cuentanos donde le harás seguimiento a tu seguro</div>
      </div>
      <div className="icon-girl-mobile">
        <img src={GetFormImage('ICON_GIRL_MOBILE')} alt="ICON_GIRL_MOBILE" />
      </div>
      <div className="copyright-text-desktop">
        © 2021 RIMAC Seguros y Reaseguros.
      </div>
    </div>
  );
}

export default TrackingSection;
