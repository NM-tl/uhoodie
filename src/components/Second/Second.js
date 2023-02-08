import React from 'react';
import './Second.css';
import Layout from '../Layout/Layout';
import hoodie from '../../assets/images/hoodie.png';

export default function Second() {
  return (
    <div className='section'>
      <Layout>
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div5"></div>
        <div className="div6"></div>
        <div className="hoodie-from">
          <h1>Lorem ipsum dolor sit amet</h1>
          <form action="">
            <div className='hoodie-from__input'>
              <label>Red</label>
              <input type="radio" />
            </div>
            <div className='hoodie-from__input'>
            <label>Yellow</label>
              <input type="radio" />
              </div>
            <div className='hoodie-from__input'>
            <label>Black</label>
              <input type="radio" />
              </div>
            <div className='hoodie-from__input'>
              <label>White</label>
              <input type="radio" />
            </div> 
            <button className='hoodie-from__btn'>Save</button>
          </form>
        </div>
        <div className="hero-right">
          <img src={hoodie} alt='hero-hoodie' />
        </div>
        <div className="div9">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='vertical-text'>
          <h2>UHoodieBrand</h2>
        </div>
      </Layout>
    </div>
  )
}
