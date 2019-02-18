import React from 'react';
import PropTypes from 'prop-types';

function FavoriteButton(props) {

  return(
    <div>
      <button onClick={props.updateLikiness()} />
    </div>
  )
}

FavoriteButton.propTypes = {
  updateLikiness: PropTypes.func
};

export default FavoriteButton;
