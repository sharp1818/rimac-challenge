/* eslint-disable max-len */
import { Collapse } from 'antd';
import PanelHeader from '../PanelHeader';
import './CollapseDisplay.scss';

function CollapseDisplay() {
  const { Panel } = Collapse;
  const text = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
      y mucho más
    </p>
  );
  return (
    <div>
      <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition="end" className="collapse-group">
        <Panel header={<PanelHeader title="Llanta robada" icon="ICON_TIRE_THEFT" />} key="1">
          {text}
        </Panel>
        <Panel header={<PanelHeader title="Choque y/o pasarte la luz roja" icon="ICON_CAR_CRASH" />} key="2">
          {text}
        </Panel>
        <Panel header={<PanelHeader title="Atropello en la via Evitamiento" icon="ICON_RUN_OVER" />} key="3">
          {text}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CollapseDisplay;
