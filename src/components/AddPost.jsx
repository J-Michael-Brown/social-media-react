import React from 'react';
import PropTypes from 'prop-types'
import { Profile } from '../assets/profile'
import { v4 } from 'uuid'


function AddPost(props){
  let _content = null;

  const inputStyle = {
    padding: '10px',
    color: 'gray',
    borderRadius: '5px',
    borderStyle: 'none',
    marginTop: '15px',
    width: '200px',
    marginBottom: '10px'
  }

  function createPost(event){
    event.preventDefault();
    props.hideTweet();
    props.addPost({
      image: Profile.image,
      username: Profile.username,
      content: _content.value,
      handle: Profile.handle,
      postId: v4(),
      likieness: false
    });
    _content.value = '';
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
    <form onSubmit={createPost}>
      <input
        type='text'
        id='content'
        placeholder='Whats happening?'
        ref={(input) => {_content = input;}}/>

        <button style={buttonStyle} type='submit'>Tweet</button>

        <hr style= {lineColor}/>
      </form>
    </div>
  )
}

AddPost.propTypes = {
  hideTweet: PropTypes.func,
  addPost: PropTypes.func
}

export default AddPost;
