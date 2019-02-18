import React from 'react';
import PropTypes from 'prop-types';

function Connections({image, username, handle}){
  const feedGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    textAlign: 'left',
  };

  const imageStyle = {
    margin: '15px',
    width: '75px',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, .3)'
  };

  const buttonStyle = {
    padding: '10px',
    fontFamily: 'helvetica',
    backgroundColor: '#ffa900',
    borderStyle: 'none',
    margin: '5px',
    color: 'white',
    width: '125px',
  };

  const usernameStyle = {
    fontSize: '22px',
    marginBottom: '5px',
    fontWeight: 'bold'
  };

  const handleStyle = {
    fontWeight: 'lighter',
    fontSize: '16px',
    marginBottom: '5px',
    color: 'gray'
  };

  return (
    <div>
      <div style={feedGrid}>
        <img src={image} style={imageStyle}></img>
        <div>
          <h2 style={usernameStyle}>{username} <br></br><span style={handleStyle}>{handle}</span></h2>
          <button style={buttonStyle}>Button</button>
        </div>
      </div>
    </div>
  );
}

Connections.propTypes = {
  image: PropTypes.string,
  username: PropTypes.string,
  handle: PropTypes.string
};

export default Connections;
