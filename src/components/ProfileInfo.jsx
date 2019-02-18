import React from 'react';

function ProfileInfo(){
  const styledProfileInfoTop = {
    backgroundColor: '#303030',
    margin: '30px',
    color: 'white',
    fontFamily: 'helvetica',
    padding: '10px',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, .02)',
    borderRadius: '3px'

  }

  const styledProfileInfoBottom = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',

  }

  const lineColor = {
    borderColor: '#303030'
  }

  const imageStyle = {
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, .2)',
    width: '100px',
    borderRadius: '50%'
  }
  return (
    <div style={styledProfileInfoTop}>
      <img style= {imageStyle} src='http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png'></img>
      <h1>John Alice</h1>
      <hr style={lineColor}/>
        <div style={styledProfileInfoBottom}>
          <h3>Tweets</h3>
          <h3>Following</h3>
          <h3>Followers</h3>
        </div>
    </div>
  )
}

export default ProfileInfo;
