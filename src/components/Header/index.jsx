import { Link } from "react-router-dom";
import { SearchComponent } from '../SearchComponent';
import { HeaderPropTypes } from '../../types/HeaderPropTypes';
import './styles.css'
export function Header({numberCart, username}) {
  return (
    <div className="header distance">
        <div className="section-details">
            <div className="section-cart-profile">
                <div className="section-cart">
                    <div className="section-icon-cart">
                        <div className="icon-cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.31344 5.84579C4.29852 5.68077 4.31815 5.51445 4.37107 5.35742C4.42398 5.2004 4.50903 5.05613 4.62078 4.93379C4.73254 4.81145 4.86855 4.71374 5.02016 4.64687C5.17176 4.58 5.33564 4.54545 5.50133 4.54541H19.964C20.1427 4.54549 20.319 4.58567 20.48 4.66301C20.641 4.74034 20.7826 4.85285 20.8944 4.99222C21.0061 5.13159 21.0851 5.29428 21.1256 5.46827C21.166 5.64226 21.1669 5.82311 21.1281 5.99747L19.9061 11.5058C19.6959 12.4524 19.1691 13.299 18.4127 13.9057C17.6563 14.5124 16.7156 14.843 15.7459 14.8428H9.01901C7.95533 14.8429 6.93009 14.4451 6.14482 13.7276C5.35955 13.0101 4.87103 12.0249 4.7753 10.9655L4.31344 5.84579ZM6.06034 6.24971L6.47279 10.8121C6.53025 11.448 6.8236 12.0394 7.29513 12.4699C7.76665 12.9005 8.38221 13.139 9.02072 13.1385H15.7476C16.3293 13.1384 16.8935 12.9399 17.3471 12.5758C17.8008 12.2117 18.1167 11.7038 18.2427 11.1359L19.3283 6.24971H6.06034Z" fill="#666666"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.789062 1.68516C0.789062 1.45915 0.878842 1.24241 1.03865 1.0826C1.19846 0.922788 1.41521 0.833008 1.64121 0.833008H4.63056C4.839 0.833219 5.04014 0.909822 5.19591 1.04832C5.35169 1.18683 5.4513 1.37762 5.47589 1.5846L6.16102 7.38093C6.18746 7.60558 6.12358 7.83153 5.98343 8.00908C5.84328 8.18663 5.63833 8.30123 5.41368 8.32767C5.18904 8.35412 4.96309 8.29023 4.78554 8.15008C4.60799 8.00993 4.49339 7.80499 4.46695 7.58034L3.87214 2.53561H1.64121C1.41521 2.53561 1.19846 2.44582 1.03865 2.28602C0.878842 2.12621 0.789063 1.91116 0.789062 1.68516ZM8.45842 19.2957C8.68442 19.2957 8.90117 19.2059 9.06098 19.0461C9.22079 18.8863 9.31057 18.6696 9.31057 18.4436C9.31057 18.2176 9.22079 18.0008 9.06098 17.841C8.90117 17.6812 8.68442 17.5914 8.45842 17.5914C8.23242 17.5914 8.01567 17.6812 7.85586 17.841C7.69605 18.0008 7.60627 18.2176 7.60627 18.4436C7.60627 18.6696 7.69605 18.8863 7.85586 19.0461C8.01567 19.2059 8.23242 19.2957 8.45842 19.2957ZM8.45842 21C8.79414 21 9.12657 20.9339 9.43673 20.8054C9.74689 20.6769 10.0287 20.4886 10.2661 20.2512C10.5035 20.0138 10.6918 19.732 10.8203 19.4219C10.9487 19.1117 11.0149 18.7793 11.0149 18.4436C11.0149 18.1078 10.9487 17.7754 10.8203 17.4652C10.6918 17.1551 10.5035 16.8733 10.2661 16.6359C10.0287 16.3985 9.74689 16.2102 9.43673 16.0817C9.12657 15.9532 8.79414 15.8871 8.45842 15.8871C7.78041 15.8871 7.13016 16.1564 6.65073 16.6359C6.17131 17.1153 5.90197 17.7655 5.90197 18.4436C5.90197 19.1216 6.17131 19.7718 6.65073 20.2512C7.13016 20.7307 7.78041 21 8.45842 21ZM16.2334 19.2957C16.4594 19.2957 16.6762 19.2059 16.836 19.0461C16.9958 18.8863 17.0856 18.6696 17.0856 18.4436C17.0856 18.2176 16.9958 18.0008 16.836 17.841C16.6762 17.6812 16.4594 17.5914 16.2334 17.5914C16.0074 17.5914 15.7907 17.6812 15.6309 17.841C15.4711 18.0008 15.3813 18.2176 15.3813 18.4436C15.3813 18.6696 15.4711 18.8863 15.6309 19.0461C15.7907 19.2059 16.0074 19.2957 16.2334 19.2957ZM16.2334 21C16.5692 21 16.9016 20.9339 17.2118 20.8054C17.5219 20.6769 17.8037 20.4886 18.0411 20.2512C18.2785 20.0138 18.4668 19.732 18.5953 19.4219C18.7238 19.1117 18.7899 18.7793 18.7899 18.4436C18.7899 18.1078 18.7238 17.7754 18.5953 17.4652C18.4668 17.1551 18.2785 16.8733 18.0411 16.6359C17.8037 16.3985 17.5219 16.2102 17.2118 16.0817C16.9016 15.9532 16.5692 15.8871 16.2334 15.8871C15.5554 15.8871 14.9052 16.1564 14.4258 16.6359C13.9463 17.1153 13.677 17.7655 13.677 18.4436C13.677 19.1216 13.9463 19.7718 14.4258 20.2512C14.9052 20.7307 15.5554 21 16.2334 21Z" fill="#666666"/>
                        </svg>
                        </div>
                            <Link className="number-cart" to={`/pagina-carrinho`}>
                            <span  className='span-cart'>{numberCart||0}</span>
                        </Link>
                    </div>
                </div>
                <div className="section-profile">
                    <div className="section-content-profile">
                        <p className="welcome">Bem-vindo</p>
                        <div className="section-nameuser">
                            <p className="name-user">{username||"Username"}</p>
                        </div>
                    </div>
                    <div className="section-icon-profile">
                        <div className="section-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M12 13.25C8.83 13.25 6.25 10.67 6.25 7.5C6.25 4.33 8.83 1.75 12 1.75C15.17 1.75 17.75 4.33 17.75 7.5C17.75 10.67 15.17 13.25 12 13.25ZM12 3.25C9.66 3.25 7.75 5.16 7.75 7.5C7.75 9.84 9.66 11.75 12 11.75C14.34 11.75 16.25 9.84 16.25 7.5C16.25 5.16 14.34 3.25 12 3.25Z" fill="#666666"/>
                            <path d="M20.5901 23.25C20.1801 23.25 19.8401 22.91 19.8401 22.5C19.8401 19.05 16.3202 16.25 12.0002 16.25C7.68015 16.25 4.16016 19.05 4.16016 22.5C4.16016 22.91 3.82016 23.25 3.41016 23.25C3.00016 23.25 2.66016 22.91 2.66016 22.5C2.66016 18.23 6.85015 14.75 12.0002 14.75C17.1502 14.75 21.3401 18.23 21.3401 22.5C21.3401 22.91 21.0001 23.25 20.5901 23.25Z" fill="#666666"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <SearchComponent />
            <Link to={`/`}  className="section-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
  <g clipPath="url(#clip0_200_369)">
    <path d="M32.9992 35.7002C30.5792 35.7002 28.5992 37.6802 28.5992 40.1002C28.5992 42.5202 30.5792 44.5002 32.9992 44.5002C35.4192 44.5002 37.3992 42.5202 37.3992 40.1002C37.3992 37.6802 35.4192 35.7002 32.9992 35.7002ZM17.5992 35.7002C15.1792 35.7002 13.1992 37.6802 13.1992 40.1002C13.1992 42.5202 15.1792 44.5002 17.5992 44.5002C20.0192 44.5002 21.9992 42.5202 21.9992 40.1002C21.9992 37.6802 20.0192 35.7002 17.5992 35.7002Z" fill="#62D0B6"/>
    <path d="M44 9.3L39.6 31.3H13.2L8.8 4.9H0V0.5H12.54L13.2 4.24L16.94 26.9H36.08L36.96 22.5H22V18.1H37.84L38.72 13.7H22V9.3H44Z" fill="#62D0B6"/>
  </g>
  <defs>
    <clipPath id="clip0_200_369">
      <rect width="44" height="44" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>
            </Link>
        </div>
    </div>
  );
}
Header.propTypes = HeaderPropTypes;