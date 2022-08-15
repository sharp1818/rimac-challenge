import AmountSection from '../AmountSection';
import InsuranceSection from '../InsuranceSection';
import TabSection from '../TabSection';

function CreatePlanComponent() {
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

export default CreatePlanComponent;
