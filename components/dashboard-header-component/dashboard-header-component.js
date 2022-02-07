import React from 'react';
import {Stack} from '@mui/material'

import ButtonComponent from '../../components/button/button-component';
import NotificationComponent from '../../components/notification/notification-component';
import ProfileIconComponent from '../../components/profileIcon/profileIcon-component';

function DashboardHeader() {
  return(
      <>
        <Stack direction='row' justifyContent="flex-end" alignItems="center"  spacing={4} >
            <ButtonComponent />
            <NotificationComponent />
            <ProfileIconComponent />
        </Stack>
      </>
  )
}

export default DashboardHeader;
