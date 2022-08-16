import AmountSection from '../../../../components/AmountSection';
import DisplayStep from '../../../../components/DisplayStep';
import InsuranceSection from '../../../../components/InsuranceSection';
import TabSection from '../../../../components/TabSection';
import './styles.scss';

function Step2() {
  return (
    <div className="create-plan-component-layout">
      <div className="display-step-component">
        <DisplayStep />
      </div>
      <div className="section-mid">
        <InsuranceSection />
        <TabSection />
      </div>
      <div>
        <AmountSection />
      </div>
    </div>
  );
}

export default Step2;
