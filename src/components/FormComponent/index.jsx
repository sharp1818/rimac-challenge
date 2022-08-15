import FormSection from '../FormSection';
import TrackingSection from '../TrackingSection';
import './FormComponent.scss';

function FormComponent() {
  return (
    <div className="form-component-layout">
      <div className="background-tracking-section">
        <TrackingSection />
      </div>
      <FormSection />
    </div>
  );
}

export default FormComponent;
