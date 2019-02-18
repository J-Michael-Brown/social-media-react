import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import { Icon } from 'react-materialize';

function FavoriteButton(props) {

  function toggleLike(){
    props.onLike(props.postId);
  }

  return(
    <div>
      <Icon>favorite</Icon>
      <button onClick={toggleLike}>Like</button>
    </div>
  );
}

FavoriteButton.propTypes = {
  onLike: PropTypes.func,
  postId: PropTypes.string
};

export default FavoriteButton;
