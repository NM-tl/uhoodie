import React from 'react';
import './First.css';
import logo from '../../assets/images/logo.png';
import hoodie from '../../assets/images/hoodie.png';
import Layout from '../Layout/Layout';

import adidas from '../../assets/images/brands/adidas.jpg';
import alpine from '../../assets/images/brands/alpine.jpg';
import arena from '../../assets/images/brands/arena.jpg';
import levise from '../../assets/images/brands/levise.jpg';
import nike from '../../assets/images/brands/nike.jpg';
import puma from '../../assets/images/brands/puma.jpg';

export default function First() {
  return (
    <div className='section'>
      <Layout>
          <div className="div1"></div>
          <div className="div2"></div>
          <div className="div3"></div>
          <div className="div4"></div>
          <div className="div5"></div>
          <div className="div6"></div>
          <div className="header">
            <div className='header-logo'>
              <img src={logo} alt='hero-logo' />
              <h1>UHoodie</h1>
            </div>
            <div className='header-nav'>
              <nav>
                <ul>
                  <li>First</li>
                  <li>Second</li>
                  <li>Third</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="brands">
            <div className='brand-item'>
              <img src={adidas} alt="adidas" />
            </div>
            <div className='brand-item'>
              <img src={alpine} alt="alpine" />
            </div>
            <div className='brand-item'>
              <img src={arena} alt="arena" />
            </div>
            <div className='brand-item'>
              <img src={levise} alt="levise" />
            </div>
            <div className='brand-item'>
              <img src={nike} alt="nike" />
            </div>
            <div className='brand-item'>
              <img src={puma} alt="puma" />
            </div>
          </div>
          <div className="hero-left">
            <h1>UHoodie brand</h1>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <button className='hero-btn'>pick</button>
          </div>
          <div className="hero-right">
            <img src={hoodie} alt='hero-hoodie' />
          </div>
      </Layout>
    </div>
  )
}
