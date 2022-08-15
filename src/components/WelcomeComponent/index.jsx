import { useContext } from 'react';
import FormContext from '../../context/Form/FormContext';
import { GetWelcomeImage } from '../../utils/helper';
import './WelcomeComponent.scss';

function WelcomeComponent() {
  const { prev, prevStep } = useContext(FormContext);

  const backPage = () => {
    prev();
    prevStep();
  };

  return (
    <div className="welcome-component-container">
      <img src={GetWelcomeImage('BACKGROUND_MOBILE')} alt="BACKGROUND_MOBILE" className="icon-boy-mobile" />
      <div className="icon-boy-background">
        <div className="icon-boy-desktop" />
      </div>
      <div className="welcome-container">
        <div className="welcome-text">
          <div>¡Te damos la bienvenida!</div>
          <div>Cuenta con nosotros para proteger tu vehículo</div>
          <div>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</div>
          <div>adrian.shura18@gmail.com</div>
        </div>
        <button type="button" className="red-button" onClick={() => { backPage(); }}>CÓMO USAR MI SEGURO</button>
      </div>
      <div className="copyright-text-mobile">© 2021 RIMAC Seguros y Reaseguros.</div>
    </div>
  );
}

export default WelcomeComponent;
