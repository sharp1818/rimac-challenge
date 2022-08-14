import { useContext } from 'react';
import 'antd/dist/antd.min.css';
import './StepProgress.scss';
import { Steps } from 'antd';
import useScreenSize from '../../hooks/useScreenSize';
import FormComponent from '../FormComponent';
import CreatePlanComponent from '../CreatePlanComponent';
import WelcomeComponent from '../WelcomeComponent';
import FormContext from '../../context/Form/FormContext';
import Header from '../Header';

const { Step } = Steps;
const steps = [
  {
    title: 'Datos',
    content: <FormComponent />,
  },
  {
    title: 'Arma tu Plan',
    content: <CreatePlanComponent />,
  },
  {
    title: 'Bienvenido',
    content: <WelcomeComponent />,
  },
];
function StepProgress() {
  const { current, currentStep } = useContext(FormContext);
  const { width } = useScreenSize();

  return (
    <div className="container">
      <Header />
      <section className="stepper-layout">
        {(current === 1 && currentStep === 1 && width >= 360)
        && (
        <Steps
          direction="vertical"
          responsive={false}
          current={currentStep}
          className="steps-mobile"
        >
          {steps.slice(0, 2).map((item, index) => (
            <Step
              status={index === 0 && 'wait'}
              key={item.title}
              title={item.title}
            />
          ))}
        </Steps>
        )}
      </section>
      <section className="step-layout">
        <div className="steps-content">{steps[current].content}</div>
      </section>
    </div>
  );
}

export default StepProgress;
