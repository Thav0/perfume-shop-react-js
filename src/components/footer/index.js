import React from 'react';
import { FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';
import './index.scss';

function Footer() {
  return (
    <footer>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </nav>
        <span>Copyright © Todos direitos reservados</span>
        <div className="payment-icons">
          <FaCcVisa />
          <FaCcMastercard />
          <FaPaypal />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
