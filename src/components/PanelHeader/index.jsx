/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Switch } from 'antd';
import { GetCreatePlanImage } from '../../utils/helper';
import './PanelHeader.scss';

function PanelHeader({ icon, title, onSwitch }) {
  const [changeButton, setChangeButton] = useState(false);

  const change = () => {
    setChangeButton(!changeButton);
  };

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
            change();
            onSwitch();
          }}
          className="icon-mobile">
          <span className="icon">{changeButton ? '-' : '+'}</span>
          {changeButton ? 'QUITAR' : 'AGREGAR'}
        </button>
        <div className="switch-desktop">
          <Switch defaultChecked={false} onChange={onSwitch} />
        </div>
      </div>
    </div>
  );
}

export default PanelHeader;
