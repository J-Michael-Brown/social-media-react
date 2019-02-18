import React from 'react';

function Navbar(){
  const buttonStyle = {
    padding: '15px',
    fontFamily: 'helvetica',
    backgroundColor: '#ffa900',
    borderStyle: 'none',
    margin: '5px',
    color: 'white',
    width: '130px'
  };
  return (
    <div>
      <button style={buttonStyle}>Home</button>
      <button style={buttonStyle}>Notifications</button>
      <button style={buttonStyle}>Messages</button>
    </div>
  );
}

export default Navbar;
