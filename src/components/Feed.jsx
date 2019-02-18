import React from 'react';
import PostControl from './PostControl';
import RecentPosts from './RecentPosts'

const feedStyle = {
  backgroundColor: '#303030',
  margin: '30px',
  height: '100%',
  color: 'white',
  fontFamily: 'helvetica',
  padding: '10px',
  borderStyle: 'solid',
  borderColor: 'rgba(255, 255, 255, .02)',
  borderRadius: '3px'
}

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recentPostFeed: []
    };
    this.toggleLikieness = this.toggleLikieness.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  toggleLikieness(postId) {
    let newRecentPostFeed = this.state.recentPostFeed.slice();
    for(let postIndex = 0; postIndex<newRecentPostFeed.length; postIndex++) {
      if(newRecentPostFeed[postIndex].postId==postId){
        newRecentPostFeed[postIndex].likieness = !newRecentPostFeed[postIndex].likieness;
      }
    }
    this.setState({recentPostFeed: newRecentPostFeed});
  }

  addPost(post) {
    console.log(this.state);
    let newRecentPostFeed = this.state.recentPostFeed.slice();
    newRecentPostFeed.push(post);
    this.setState({recentPostFeed: newRecentPostFeed});
  }

  render() {
    return (
      <div style={feedStyle}>
        <PostControl addPost={this.addPost}/>
        <RecentPosts recentPostFeed={this.state.recentPostFeed}/>
      </div>
    );
  }
}

export default Feed;
