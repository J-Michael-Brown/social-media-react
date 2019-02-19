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
          addLikieness = {props.addLikieness}
          subtractLikieness = {props.subtractLikieness}
          onLike = {props.toggleLikieness}
          key = {v4()}
        />
      )}
    </div>
  );
}

RecentPosts.propTypes = {
  recentPostFeed: PropTypes.array,
  addLikieness: PropTypes.func.isRequired,
  subtractLikieness: PropTypes.func.isRequired
};

export default RecentPosts;
