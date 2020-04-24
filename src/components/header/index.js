import React from 'react';
import { FaShoppingBasket, FaUserCog } from 'react-icons/fa';
import logo from '../../assets/logo_300x.png';

import './index.scss';

function Header() {
  return (
    <div className="container">
      <header className="top-nav">
        <h1>Nome da Loja</h1>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Quem Somos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="basket-items">
            <span>
              <FaShoppingBasket />
              <span className="total-items">0</span>
            </span>
            $0.00
          </div>

          <a href="#" className="user-config">
            <FaUserCog />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
