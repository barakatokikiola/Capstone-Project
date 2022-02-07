import React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


function NotificationComponent() {
  return(
    <div>
        <Box >
            <Badge color="error" variant="dot">
                <NotificationsNoneIcon  sx={{fontSize:'3rem'}}/>
            </Badge>
        </Box>
  </div>
  ) 
 
}

export default NotificationComponent;
