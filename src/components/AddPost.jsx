import React from 'react';
import PropTypes from 'prop-types'

function AddPost(props){
  const inputStyle = {
    padding: '10px',
    color: 'gray',
    borderRadius: '5px',
    borderStyle: 'none',
    marginTop: '15px',
    width: '200px',
    marginBottom: '10px'
  }

  const lineColor = {
    borderColor: '#303030'
  }

  const buttonStyle = {
    padding: '10px',
    fontFamily: 'helvetica',
    backgroundColor: '#ffa900',
    borderStyle: 'none',
    margin: '5px',
    color: 'white',
    width: '75px',
    borderRadius: '5px'
  }
  return (
    <div>
      <form>
        <input style={inputStyle} placeholder="What's happening?"></input>
        <button style={buttonStyle} onClick={props.hideTweet}>Tweet</button>
        <hr style= {lineColor}/>
      </form>
    </div>
  )
}

AddPost.propTypes = {
  hideTweet: PropTypes.func
}

export default AddPost;
