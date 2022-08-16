/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Switch } from 'antd';
import { GetCreatePlanImage } from '../../utils/helper';
import './PanelHeader.scss';

function PanelHeader({ icon, title, onSwitch, boolean }) {
  return (
    <div className="panel-header">
      <div>
        <img src={GetCreatePlanImage(icon)} alt={icon} className="icon-boy-mobile" />
      </div>
      <div className="add-menu">
        <div>{title}</div>
        <button
          type="button"
          onClick={() => {
            onSwitch();
          }}
          className="icon-mobile">
          <span className="icon">{boolean ? '-' : '+'}</span>
          {boolean ? 'QUITAR' : 'AGREGAR'}
        </button>
        <div className="switch-desktop">
          <Switch defaultChecked={boolean} onChange={onSwitch} />
        </div>
      </div>
    </div>
  );
}

export default PanelHeader;
