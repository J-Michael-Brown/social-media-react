import React from 'react';
import Post from './Post';
import { v4 } from 'uuid';

class RecentPosts extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      recentPostFeed: [
        {
          image: "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png",
          username: "mastermind1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
          handle: "@mastermind1",
          postId: '1',
          likieness: false
        },
        {
          image: "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png",
          username: "mastermind2",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
          handle: "@mastermind2",
          postId: '2',
          likieness: false
        },
        {
          image: "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png",
          username: "mastermind3",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
          handle: "@mastermind3",
          postId: '3',
          likieness: false
        }
      ]
    }
    this.toggleLikieness = this.toggleLikieness.bind(this);
  }

  toggleLikieness(postId) {
    console.log('toggleLikieness function reached');
    // let newRecentPostFeed = this.recentPostFeed.slice();
    // for(let postIndex = 0; postIndex<newRecentPostFeed.length; postIndex++) {
    //   if(newRecentPostFeed[postIndex].postId==postId){
    //     newRecentPostFeed[postIndex].likieness = !newRecentPostFeed[postIndex].likieness;
    //   }
    // }
    // this.setState({recentPostFeed: newRecentPostFeed});
  }

  render() {
    return (
      <div>
      {this.state.recentPostFeed.map((post) =>
        <Post
        image = {post.image}
        username = {post.username}
        content = {post.content}
        handle = {post.handle}
        postId = {post.postId}
        likieness = {post.likieness}
        onLike = {this.toggleLikieness}
        key = {v4()}
        />
      )}
      </div>
    )
  }
}

export default RecentPosts;
