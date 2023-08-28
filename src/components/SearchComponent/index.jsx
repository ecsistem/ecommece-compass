import { useState } from 'react';
import './styles.css'; 

export function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearchSubmit = (event) => {
      event.preventDefault();
    };
  
    return (
      <div className="search-container">
        <div className="search-input-container">
        <div className="search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clipPath="url(#clip0_200_361)">
        <path d="M16 15.2938L11.7462 11.04C12.7552 9.86924 13.366 8.34616 13.366 6.683C13.366 2.99798 10.368 0 6.683 0C2.99798 0 0 2.99798 0 6.683C0 10.368 2.99798 13.366 6.683 13.366C8.34616 13.366 9.86924 12.7552 11.04 11.7462L15.2938 16L16 15.2938ZM0.998739 6.683C0.998739 3.54869 3.54869 0.998739 6.683 0.998739C9.81731 0.998739 12.3673 3.54869 12.3673 6.683C12.3673 9.81731 9.81731 12.3673 6.683 12.3673C3.54869 12.3673 0.998739 9.81731 0.998739 6.683Z" fill="#A5A5A5"/>
        </g>
        <defs>
        <clipPath id="clip0_200_361">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </div>
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="search-button" onClick={handleSearchSubmit}>
            Buscar
          </button>
        </div>

      </div>
    );
  }
  