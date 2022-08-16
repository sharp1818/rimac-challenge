import './App.scss';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import ArmaTuPlan from './pages/armaTuPlan';
import ConfirmationStep from './pages/armaTuPlan/components/confirmation_step';
import Step2 from './pages/armaTuPlan/components/step2';
import Step1 from './pages/armaTuPlan/components/step1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate replace to="/arma-tu-plan/step_1" />} />
          <Route path="/arma-tu-plan" element={<ArmaTuPlan />}>
            <Route path="step_1" element={<Step1 />} />
            <Route path="step_2" element={<Step2 />} />
            <Route path="confirmation" element={<ConfirmationStep />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
