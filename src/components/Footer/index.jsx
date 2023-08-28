import './style.css'
import AndroidIcon from '../../assets/images/Icons/googleplay.svg'
import AppleIcon from '../../assets/images/Icons/apple.svg'
import NewsLetterIcon from '../../assets/images/Icons/email.svg'
import MasterCardIcon from '../../assets/images/Icons/mastercard.png'
import PaypalIcon from '../../assets/images/Icons/paypal.png'
import VisaIcon from '../../assets/images/Icons/visa.png'

export function Footer() {
    return (
        <div>
            <div className="footer-top">
                <div className="footer-top-card-apps">
                    <h2 className="footer-title-apps">Baixe nosso App</h2>
                    <div className="footer-apps-box">
                        <img src={AndroidIcon} alt="googleplay icon" />
                        <img src={AppleIcon} alt="apple icon" />
                    </div>
                </div>
                <div className="footer-top-card-subscribe">
                    <div className="footer-top-card-email">
                        <p className="footer-title-subscribe">Você pode cancelar a inscrição a qualquer momento</p>
                        <div className="footer-email-box">
                            <button className="footer-button-subscribe">Inscrever</button>
                            <input type="email" className="footer-top-card-input" placeholder="Digite o email"></input>
                        </div>
                    </div>
                    <div className="footer-newsletter-cardbox">
                        <div className="footer-newsletter-box">
                            <h2 className="footer-newsletter-title">Assine a Newsletter</h2>
                            <p className="footer-newsletter-desc">Cadastre-se agora e ganhe 10% de desconto na sua próxima compra</p>
                        </div>
                        <img src={NewsLetterIcon} alt="email icon" className="footer-newsletter-icon" />
                    </div>

                </div>
            </div>
            <div className="footer-down">
                <div className="footer-down-payment">
                    <div className="footer-down-payment-wrapper ">
                    <img src={PaypalIcon} className="footer-down-payment-icon"/>
                    </div>
                    <div className="footer-down-payment-wrapper ">
                    <img src={MasterCardIcon}  className="footer-down-payment-icon"/>
                    </div>
                    <div className="footer-down-payment-wrapper ">
                    <img src={VisaIcon}  className="footer-down-payment-icon"/>
                    </div>
                </div>
                <p className="footer-down-copyright">2023 © Todos os direitos reservados</p>
            </div>
        </div>
            )
}