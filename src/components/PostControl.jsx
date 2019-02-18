import React from 'react';
import AddPost from './AddPost'
import PropTypes from 'prop-types';

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

class PostControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false
    }
    this.showTweetForm = this.showTweetForm.bind(this);
    this.hideTweetForm = this.hideTweetForm.bind(this);
  }

  showTweetForm(){
    this.setState({formVisible: true})
  }

  hideTweetForm(){
    this.setState({formVisible: false})
  }

  render(){
    let currentVisibleContent = null;
    if (this.state.formVisible) {
      currentVisibleContent = <AddPost hideTweet={this.hideTweetForm} addPost={this.props.addPost}/>
    } else {
      currentVisibleContent = <button style={buttonStyle} onClick={this.showTweetForm}>Tweet</button>
    }
    return(
      <div>
        {currentVisibleContent}
      </div>
    );
  }
}

PostControl.propTypes = {
  addPost: PropTypes.func
}

export default PostControl;
