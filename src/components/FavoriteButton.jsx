import React from 'react';
import PropTypes from 'prop-types';

function FavoriteButton(props) {

  function toggleLike(){
    props.onLike(props.postId)
  }

  return(
    <div>
      <button onClick={toggleLike}>Like</button>
    </div>
  )
}

FavoriteButton.propTypes = {
  onLike: PropTypes.func,
  postId: PropTypes.string
};

export default FavoriteButton;
