import React from 'react';
import PropTypes from "prop-types";

function Post({image, username, content, handle}){
  const feedGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    textAlign: 'left',
  }

  const imageStyle = {
    margin: '15px',
    width: '75px',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, .2)'
  }

  const lineColor = {
    borderColor: '#303030'
  }

  const usernameStyle = {
    fontSize: '22px',
    marginBottom: '0',
    fontWeight: 'bold',
  }

  const handleStyle = {
    fontWeight: 'lighter',
    fontSize: '16px',
    marginBottom: '5px',
    color: 'gray',
    marginBottom: '0px'
  }

  const paragraphStyle = {
    fontWeight: 'lighter',
    marginTop: '6px'
  }

  return (
    <div>
      <div style={feedGrid}>
        <img src={image} style={imageStyle}></img>
        <div>
          <h2 style={usernameStyle}>{username} <span style={handleStyle}>{handle}</span></h2>
          <p style={paragraphStyle}>{content}</p>
        </div>
      </div>
      <hr style ={lineColor}/>
    </div>
  )
}

Post.propTypes = {
  image: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string,
  handle: PropTypes.string
};

export default Post;
