import React from 'react';
import Avatar from '@mui/material/Avatar';
import ProfilePic from './profile-pic.png'

function ProfileIconComponent() {
  return(
    <div>
    <Avatar alt="Remy Sharp" src={ProfilePic}  sx={{ width: 55, height: 55 }}/>
    </div>
  ) 
}

export default ProfileIconComponent
