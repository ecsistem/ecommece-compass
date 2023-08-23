import './style.css'
import  { useState, useEffect } from 'react';
import banner from '../../assets/images/banners/bannerContainer.png'
import bannerMobile from '../../assets/images/banners/bannerMobile.png'
import itemImg from '../../assets/images/banners/lap.png'
import arrow from '../../assets/images/Icons/iconArrow.svg'

export function LowerBanner() {
        const [shouldRenderItemImg, setShouldRenderItemImg] = useState(true);
        const [bannerImage, setBannerImage] = useState(banner);
    
        useEffect(() => {
            const handleResize = () => {
                const windowWidth = document.documentElement.clientWidth;
                if (windowWidth <= 1650) {                    
                    setShouldRenderItemImg(false);
                } else {
                    setShouldRenderItemImg(true);
                }

                if (windowWidth <= 800) {
                    console.log('Setting banner to mobile');
                    setBannerImage(bannerMobile); 
                } else {
                    console.log('Setting default');
                    setBannerImage(banner); 
                }
            };
    
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);
    
    return (
        <div>
            <div className="lower-banner-container">
                <img className="lower-banner-container" src={bannerImage} alt="banner" />
                {shouldRenderItemImg && <img className="lower-banner-img-card" src={itemImg} alt="item" />}
                <div className="lower-banner-text-card ">
                    <div className="lower-banner-text-card-title">Home Office</div>
                    <div className="lower-banner-text-card-description">
                        A loja de cestos oferece-lhe todos os artigos de eletrónica ou artigos de decoração de que necessita, 
                        para além dos melhores descontos em produtos. Compre agora e aproveite todos os descontos nos produtos.</div>
                        {shouldRenderItemImg && <button className="lower-banner-button"><img src={arrow}/> Confira</button>}
                </div>
            </div>
        </div>



    )
}
