import FormSection from '../FormSection';
import TrackingSection from '../TrackingSection';
import './FormComponent.scss';

function FormComponent() {
  return (
    <div className="form-component-layout">
      <TrackingSection />
      <FormSection />
    </div>
  );
}

export default FormComponent;
