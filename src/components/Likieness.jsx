import React from 'react';
import PropTypes from 'prop-types';

function Likieness(props){

  return(
    <div>
      {props.likieness}
    </div>
  );
}

Likieness.propTypes = {
  likieness: PropTypes.bool
};

export default Likieness;
