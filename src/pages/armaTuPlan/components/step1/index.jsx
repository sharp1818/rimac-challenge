import FormSection from '../../../../components/FormSection';
import TrackingSection from '../../../../components/TrackingSection';
import './styles.scss';

function Step1() {
  return (
    <div className="form-component-layout">
      <div className="background-tracking-section">
        <TrackingSection />
      </div>
      <FormSection />
    </div>
  );
}

export default Step1;
