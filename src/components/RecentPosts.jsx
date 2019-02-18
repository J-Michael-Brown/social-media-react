import React from 'react';
import Post from './Post';
import { v4 } from 'uuid';

function RecentPosts(){
  const RecentPostFeed = [
    {
      image: "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png",
      username: "mastermind1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
      handle: "@mastermind1"
    },
    {
      image: "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png",
      username: "mastermind2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
      handle: "@mastermind2"
    },
    {
      image: "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png",
      username: "mastermind3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
      handle: "@mastermind3"
    }
  ];

  return (
    <div>
      {RecentPostFeed.map((post) =>
        <Post
          image = {post.image}
          username = {post.username}
          content = {post.content}
          handle = {post.handle}
          key = {v4()}
        />
      )}
    </div>
  )
}

export default RecentPosts;
