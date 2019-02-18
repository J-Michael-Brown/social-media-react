import React from 'react';
import { Profile } from '../assets/profile.js'

function Bio(){
  const styledBio = {
    backgroundColor: '#303030',
    padding: '20px',
    textAlign: 'left',
    margin: '30px',
    color: 'white',
    fontFamily: 'helvetica',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, .02)',
    borderRadius: '3px',
    fontWeight: 'lighter'

  }

  return (
    <div style={styledBio}>
      <p>{Profile.bio}</p>
    </div>
  )
}

export default Bio;
