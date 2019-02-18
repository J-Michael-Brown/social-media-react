import React from 'react';

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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

export default Bio;
