import AmountSection from '../../../../components/AmountSection';
import InsuranceSection from '../../../../components/InsuranceSection';
import TabSection from '../../../../components/TabSection';

function Step2() {
  return (
    <div className="create-plan-component-layout">
      <div>
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
