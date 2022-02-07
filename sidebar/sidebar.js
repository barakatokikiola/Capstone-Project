import React from 'react';
import Logo from './vector.png'
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import { Divider, Stack,Button } from '@mui/material';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import './sidebar.css'


function Sidebar() {
  


  return(
    <div>
        <Stack>
            <Box sx={{p:3, textAlign:'center', spacing:'3px'}}>
            <img src={Logo} alt='logo' style={{width:'40%', marginBottom:'3rem'}} />
                <Divider />
                <Stack  spacing={2} mt={4}>
                    <NavLink to='dashboard/reports'>
                    <Button sx={{color:'#FFFFFF4D'}} variant="text" startIcon={<StickyNote2Icon />} className='links'> 
                    Reports
                    </Button>
                    </NavLink>

                    <NavLink to='dashboard/profile'>
                    <Button   sx={{color:'#FFFFFF4D'}} variant="text" startIcon={<PermIdentityIcon />} className='links'>
                    Profile
                    </Button>
                    </NavLink>

                    <NavLink to='dashboard/messages'>
                    <Button  sx={{color:'#FFFFFF4D'}} variant="text" startIcon={<ChatBubbleOutlineIcon />} className='links'>
                    Messages
                    </Button>
                    </NavLink>
                </Stack>
            </Box>
        </Stack>
        
    </div>
  ) 
}

export default Sidebar;
