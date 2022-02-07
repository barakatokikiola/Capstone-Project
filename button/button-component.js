import React from 'react';
import Button from '@mui/material/Button'

function ButtonComponent(props) {
  return(
    <div>
    <Button variant="contained" sx={{backgroundColor:'rgba(1, 120, 254, 1)' , padding:'.8rem 2.3rem' , fontSize:'1.2rem', textTransform:'initial'}}>Report a crime</Button>
    </div>
  ) 
}

export default ButtonComponent;
