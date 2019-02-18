import React from 'react';
import Navbar from './Navbar';
import Search from './Search';

function Header(){
  let headerStyle = {
    padding: '30px',
    display: 'grid',
    gridTemplateColumns: '5fr 1fr'
  };
  return (
    <div>
      <div style={headerStyle}>
        <Navbar/>
        <Search/>
      </div>
      <hr/>
    </div>
  );
}

export default Header;
