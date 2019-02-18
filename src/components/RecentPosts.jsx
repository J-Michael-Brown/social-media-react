import React from 'react';
import Post from './Post';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function RecentPosts(props) {
  return (
    <div>
    {props.recentPostFeed.map((post) =>
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
  );
}

RecentPosts.propTypes = {
  recentPostFeed: PropTypes.array
}

export default RecentPosts;
