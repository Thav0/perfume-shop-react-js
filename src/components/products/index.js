import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import product1 from '../../assets/products/produto-01.png';
import './index.scss';

function Products() {
  return (
    <div className="products">
      <div className="container">
        <ul>
          <li>
            <img src={product1} alt="produto1" />

            <div className="product-info">
              <h2>Calvin Klein</h2>
              <span>$19.00</span>

              <button type="button" className="btn buy-button">
                <FaCartPlus />
                Adicionar
              </button>
            </div>
          </li>
          <li>
            <img src={product1} alt="produto1" />

            <div className="product-info">
              <h2>Hugo Boss</h2>
              <span>$19.00</span>

              <button type="button" className="btn buy-button">
                <FaCartPlus />
                Adicionar
              </button>
            </div>
          </li>
          <li>
            <img src={product1} alt="produto1" />

            <div className="product-info">
              <h2>Tommy</h2>
              <span>$19.00</span>

              <button type="button" className="btn buy-button">
                <FaCartPlus />
                Adicionar
              </button>
            </div>
          </li>
          <li>
            <img src={product1} alt="produto1" />

            <div className="product-info">
              <h2>Tommy</h2>
              <span>$19.00</span>

              <button type="button" className="btn buy-button">
                <FaCartPlus />
                Adicionar
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Products;
