import React from 'react';
import ConnectionList from './ConnectionList';

function Connect(){
  const styledConnect = {
    backgroundColor: '#303030',
    margin: '30px',
    color: 'white',
    fontFamily: 'helvetica',
    height: '100%',
    padding: '10px',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, .02)',
    borderRadius: '3px'
  };

  const lineColor = {
    borderColor: '#303030'
  };
  return (
    <div style={styledConnect}>
      <h3>People you may know: </h3>
      <hr style={lineColor}/>
      <ConnectionList/>
    </div>
  );
}

export default Connect;
