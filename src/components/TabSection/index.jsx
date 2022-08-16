/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-wrap-multilines */
import { Tabs } from 'antd';
// import { useFormContext } from 'react-hook-form';
import CollapseDisplay from '../CollapseDisplay';
import './TabSection.scss';

function TabSection() {
  const { TabPane } = Tabs;
  // const { watch, setValue } = useFormContext();

  return (
    <div>
      <Tabs className="tab-section" defaultActiveKey="1">
        <TabPane
          tab={
            <div className="custom-label-tab">
              <div>Protege a</div>
              <div />
              tu auto
            </div>
          }
          key="1">
          <CollapseDisplay />
        </TabPane>
        <TabPane
          tab={
            <div className="custom-label-tab">
              <div>Protege a los</div>
              <div />
              que te rodean
            </div>
          }
          key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane
          tab={
            <div className="custom-label-tab">
              <div>Mejora tu</div>
              <div />
              plan
            </div>
          }
          key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabSection;
