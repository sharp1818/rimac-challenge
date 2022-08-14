import './App.scss';
import StepProgress from './components/StepProgress';
import FormState from './context/Form/FormState';

function App() {
  return (
    <div className="App">
      <FormState>
        <StepProgress />
      </FormState>
    </div>
  );
}

export default App;
