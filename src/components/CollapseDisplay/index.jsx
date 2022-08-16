/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable max-len */
import { Collapse } from 'antd';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import PanelHeader from '../PanelHeader';
import './CollapseDisplay.scss';

function CollapseDisplay() {
  const { Panel } = Collapse;
  const { setValue, watch } = useFormContext();
  const amount = watch('amount');

  const calculateNewAmount = (id, negative) => {
    if (id === 0) {
      setValue('amount', watch('amount') + (!negative ? -15 : 15));
    }
    if (id === 1) {
      setValue('amount', watch('amount') + (!negative ? -20 : 20));
    }
    if (id === 2) {
      setValue('amount', watch('amount') + (!negative ? -50 : 50));
    }
  };

  useEffect(() => {
    if (amount >= 16000) {
      const newOptionsArr = watch('options');
      newOptionsArr[0].visibility = false;
      newOptionsArr[1].visibility = false;
      setValue('options', newOptionsArr);
    } else {
      const newOptionsArr = watch('options');
      newOptionsArr[0].visibility = true;
      newOptionsArr[1].visibility = true;
      setValue('options', newOptionsArr);
    }
  }, [amount]);

  useEffect(() => {
    if (!watch('options')[0].visibility) {
      const negative = watch('options')[0].value;
      setValue('amount', watch('amount') + (negative ? -15 : 0));
      const newOptionsArr = watch('options');
      newOptionsArr[0].value = false;
      setValue('options', newOptionsArr);
    }
    if (!watch('options')[1].visibility) {
      const negative = watch('options')[1].value;
      setValue('amount', watch('amount') + (negative ? -20 : 0));
      const newOptionsArr = watch('options');
      newOptionsArr[1].value = false;
      setValue('options', newOptionsArr);
    }
  }, [watch('options')[0].visibility, watch('options')[1].visibility]);

  const onSwitch = (id) => {
    const newOptionsArr = watch('options');
    const negative = !newOptionsArr[id].value;
    newOptionsArr[id].value = negative;
    setValue('options', newOptionsArr);
    calculateNewAmount(id, negative);
  };

  const text = (
    <p
      style={{
        paddingLeft: 24
      }}>
      He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant
      Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del
      pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio
      de esos de poner las bicis y mucho más
    </p>
  );
  return (
    <div>
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIconPosition="end"
        className="collapse-group">
        {watch('options')[0].visibility && (
          <Panel
            header={
              <PanelHeader
                title="Llanta robada"
                icon="ICON_TIRE_THEFT"
                onSwitch={() => onSwitch(0)}
                boolean={watch('options')[0].value}
              />
            }
            key="0">
            {text}
          </Panel>
        )}
        {watch('options')[1].visibility && (
          <Panel
            header={
              <PanelHeader
                title="Choque y/o pasarte la luz roja"
                icon="ICON_CAR_CRASH"
                onSwitch={() => onSwitch(1)}
                boolean={watch('options')[1].value}
              />
            }
            key="1">
            {text}
          </Panel>
        )}
        {watch('options')[2].visibility && (
          <Panel
            header={
              <PanelHeader
                title="Atropello en la via Evitamiento"
                icon="ICON_RUN_OVER"
                onSwitch={() => onSwitch(2)}
                boolean={watch('options')[2].value}
              />
            }
            key="2">
            {text}
          </Panel>
        )}
      </Collapse>
    </div>
  );
}

export default CollapseDisplay;
