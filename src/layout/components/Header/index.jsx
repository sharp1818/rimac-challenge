import { PhoneFilled } from '@ant-design/icons';
import useScreenSize from '../../../hooks/useScreenSize';
import { GetHeaderImage } from '../../../utils/helper';
import './Header.scss';

function Header() {
  const { width } = useScreenSize();
  return (
    <header className="header-container">
      <img src={GetHeaderImage('LOGO_RIMAC')} alt="Logo_Rimac" />
      {width <= 360 ? (
        <div className="call-us-mobile">
          <PhoneFilled rotate={90} style={{ fontSize: '16px', color: ' #6769FF' }} />
          <span>Llámanos</span>
        </div>
      ) : (
        <div className="call-us-desktop">
          <div>¿Tienes algunda duda?</div>
          <PhoneFilled rotate={90} style={{ fontSize: '16px', color: ' #6769FF' }} />
          <span>(01) 411 6001</span>
        </div>
      )}
    </header>
  );
}

export default Header;
