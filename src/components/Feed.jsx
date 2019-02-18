import React from 'react';
import PostControl from './PostControl';
import RecentPosts from './RecentPosts'

function Feed(){
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
  return (
    <div style={feedStyle}>
      <PostControl/>
      <RecentPosts/>
    </div>
  )
}

export default Feed;
