import React from 'react';
import ProfileInfo from './ProfileInfo';
import Bio from './Bio';
import Connect from './Connect';
import Feed from './Feed';

function ProfilePage(){
  const styledProfilePage = {
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    margin: '30px'
  }

  return(
    <div style={styledProfilePage}>
      <div>
        <ProfileInfo/>
        <Bio/>
      </div>
      <Feed/>
      <Connect/>
    </div>
  )

}

export default ProfilePage;
