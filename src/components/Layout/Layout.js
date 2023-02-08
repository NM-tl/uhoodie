import React from 'react';
import './Layout.css';

export default function Layout( { children } ) {
  return (
    <div className='grid-container'>{children}</div>
  )
}