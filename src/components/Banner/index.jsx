import NextButtonBanner from '../Buttons/NextButtonBanner';
import ReturnButtonBanner from '../Buttons/ReturnButtonBanner';
import './styles.css';

export function Banner() {
  return (
    <div className="banner">
      <div className="distance">
      <ReturnButtonBanner/>
      <div className="banner-content">
        <h1 className='title-banner'>Macbook PRO M2</h1>
        <p className='description-banner'>Velocidade e performance</p>
        <button className="banner-button-center">Confira</button>
      </div>
      <NextButtonBanner/>
      </div>
    </div>
  );
}