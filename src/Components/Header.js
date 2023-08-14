import React from 'react';
import './Component.css';
function Header(props) {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <h1 className='heading'> {props.heading}</h1>
    </div>
  )
}

export default Header
