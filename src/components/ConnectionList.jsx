import React from 'react';
import Connections from './Connections';

function ConnectionList(){
  return (
    <div>
      <Connections
        image="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"
        username="mastermind8"
        handle="@mastermind8"/>
      <Connections
        image="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"
        username="mastermind9"
        handle="@mastermind9"/>
      <Connections
        image="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"
        username="mastermind5"
        handle="@mastermind5"/>
    </div>
  );
}

export default ConnectionList;
