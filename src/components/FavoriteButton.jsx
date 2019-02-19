import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import { Icon } from 'react-materialize';

function FavoriteButton(props) {

  function favoritePost(){
    props.addLikieness(props.postId);
  }

  return(
    <div onClick={favoritePost}>
      <Icon>favorite</Icon>
    </div>
  );
}

FavoriteButton.propTypes = {
  postId: PropTypes.string,
  addLikieness: PropTypes.func,
  subtractLikieness: PropTypes.func
};

export default FavoriteButton;
