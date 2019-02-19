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
  addLikieness: PropTypes.func,
  subtractLikieness: PropTypes.func,
  likieness: PropTypes.number
};

export default Likieness;
