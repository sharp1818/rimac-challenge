/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Switch } from 'antd';
import { GetCreatePlanImage } from '../../utils/helper';
import './PanelHeader.scss';

function PanelHeader(props) {
  const [changeButton, setChangeButton] = useState(false);

  const onSwitch = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const change = () => {
    setChangeButton(!changeButton);
  };

  return (
    <div className="panel-header">
      <div><img src={GetCreatePlanImage(props.icon)} alt={props.icon} className="icon-boy-mobile" /></div>
      <div className="add-menu">
        <div>{props.title}</div>
        <button type="button" onClick={() => { change(); }} className="icon-mobile">
          <span className="icon">{changeButton ? '-' : '+' }</span>
          {changeButton ? 'QUITAR' : 'AGREGAR' }
        </button>
        <div className="switch-desktop">
          <Switch defaultChecked={false} onChange={onSwitch} />
        </div>
      </div>
    </div>
  );
}

export default PanelHeader;
