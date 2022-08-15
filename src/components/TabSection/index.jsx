import { Tabs } from 'antd';
import CollapseDisplay from '../CollapseDisplay';
import './TabSection.scss';

function TabSection() {
  const { TabPane } = Tabs;

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Tab 1" key="1">
          <CollapseDisplay />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabSection;
