import React from 'react';
import {Stack,Box} from '@mui/material'
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

import './report.css'


function Report() {
const Data = [
  {
    title:'Filled Reports',
    number:1,
  },
  {
    title:'Active Reports',
    number:1,
  },
  {
    title:'Solved Reports',
    number:0,
  }
]

  return(
    <>
    <Stack sx={{m:'10rem 1.5rem' }}>
        <h6>Hi Username,</h6>
        <h1>Welcome to your dashboard</h1>
        <Stack direction='row' spacing={5} sx={{paddingRight:'5rem'}}>
        {
          Data.map(item=>(
            <Box className='report-details' flex={1}>
            <Stack direction='row' spacing={2}>
            <StickyNote2Icon sx={{borderRadius:'50px', backgroundColor:'rgba(1, 120, 254, 1)', color:'#fff' , padding:'5px', fontSize:'3rem'}}/>
            <Box>
            <h5>{item.title}</h5>
            <span>{item.number}</span>
            </Box>
            </Stack>
            </Box>
          ))
        }
        </Stack>
      </Stack>
    </>
  )
}

export default Report;
