import React from 'react';
import PropTypes from 'prop-types';

function Likieness(props){
  let message = 'false';
  if(props.likieness) {
    message = 'true';
  }
  return(
    <div>
      {message}
    </div>
  );
}

Likieness.propTypes = {
  likieness: PropTypes.bool
};

export default Likieness;
