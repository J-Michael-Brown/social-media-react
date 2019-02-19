import React from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from './FavoriteButton';
import Likieness from './Likieness';

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
  borderColor: 'rgba(255, 255, 255, .2)'
};

const lineColor = {
  borderColor: '#303030'
};

const usernameStyle = {
  fontSize: '22px',
  marginBottom: '0',
  fontWeight: 'bold',
};

const handleStyle = {
  fontWeight: 'lighter',
  fontSize: '16px',
  marginBottom: '5px',
  color: 'gray',
};

const paragraphStyle = {
  fontWeight: 'lighter',
  marginTop: '6px'
};

function Post(props) {

  return (
    <div>
      <div style={feedGrid}>
        <img src={props.image} style={imageStyle}></img>
        <div>
          <h2 style={usernameStyle}>{props.username} <span style={handleStyle}>{props.handle}</span></h2>
          <p style={paragraphStyle}>{props.content}</p>
        </div>
        <FavoriteButton
          addLikieness={props.addLikieness} subtractLikieness={props.subtractLikieness} postId={props.postId}/>
        <Likieness
          likieness={props.likieness}/>
      </div>
      <hr style ={lineColor}/>
    </div>
  );
}

Post.propTypes = {
  image: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string,
  handle: PropTypes.string,
  postId: PropTypes.string,
  likieness: PropTypes.number,
  addLikieness: PropTypes.func.isRequired,
  subtractLikieness: PropTypes.func.isRequired
};

export default Post;
