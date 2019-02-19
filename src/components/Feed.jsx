import React from 'react';
import PostControl from './PostControl';
import RecentPosts from './RecentPosts';

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
};

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recentPostFeed: []
    };
    this.addLikieness = this.addLikieness.bind(this);
    this.subtractLikieness = this.subtractLikieness.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  addLikieness(postId) {
    let newRecentPostFeed = this.state.recentPostFeed.slice();
    for(let postIndex = 0; postIndex<newRecentPostFeed.length; postIndex++) {
      if(newRecentPostFeed[postIndex].postId==postId){
        newRecentPostFeed[postIndex].likieness++;
      }
    }
    this.setState({recentPostFeed: newRecentPostFeed});
  }

  subtractLikieness(postId) {
    let newRecentPostFeed = this.state.recentPostFeed.slice();
    for(let postIndex = 0; postIndex<newRecentPostFeed.length; postIndex++) {
      if(newRecentPostFeed[postIndex].postId==postId){
        newRecentPostFeed[postIndex].likieness++;
      }
    }
    this.setState({recentPostFeed: newRecentPostFeed});
  }

  addPost(post) {
    let newRecentPostFeed = this.state.recentPostFeed.slice();
    newRecentPostFeed.push(post);
    this.setState({recentPostFeed: newRecentPostFeed});
  }

  render() {
    return (
      <div style={feedStyle}>
        <PostControl addPost={this.addPost}/>
        <RecentPosts recentPostFeed={this.state.recentPostFeed} addLikieness={this.addLikieness} subtractLikieness={this.subtractLikieness}/>
      </div>
    );
  }
}

export default Feed;
