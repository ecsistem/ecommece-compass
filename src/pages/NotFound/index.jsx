import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import './styles.css';

export function NotFound() {
    return (
        <>
            <Header/>
            <div className="not-found-container">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-message">Desculpe mas a página que você busca não foi encontada ;(</p>
            </div>
            <Footer/>
        </>
    )
}
