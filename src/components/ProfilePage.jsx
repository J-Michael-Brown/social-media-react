import React from 'react';
import Connect from './Connect';
import Feed from './Feed';
import Profile from './Profile';

function ProfilePage(){
  const styledProfilePage = {
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    margin: '30px'
  };

  return(
    <div style={styledProfilePage}>
      <Profile/>
      <Feed/>
      <Connect/>
    </div>
  );

}

export default ProfilePage;
