import React from 'react';
import { Grid, } from '@mui/material';
import { Route ,Routes} from 'react-router-dom';

import './dashboard.css'
import Report from '../report/report';
import Messages from '../messages/messages';
import Profile from '../profile/profile';
import Sidebar from '../../components/sidebar/sidebar';
import Welcome from '../welcome/welcome';
import DashboardHeader from '../../components/dashboard-header-component/dashboard-header-component';


// <img src={Logo} alt='logo' style={{width:'40%', marginBottom:'3rem'}} />

// const routes = [
//     {
//       id: 1,
//       path: "/dashboard",
//       exact: true,
//       main: () => <Welcome />  
//     },
//     {
//       id: 2,
//       path: "/dashboard/report",
//       main: () => <Report />  
//     },
//     {
//       id: 3,
//       path: "/dashboard/profile",
//       main: () => <Profile />  
//     },
//     {
//       id: 4,
//       path: "/dashboard/message",
//       main: () => <Messages />  
//     }
//   ];





function Dashboard() {
  
  return(
    <Grid container >
      <Grid item xs={2} sx={{backgroundColor:'rgba(8, 37, 79, 1)', color:'#fff' , height:'100vh'}}>
      <Sidebar />
      </Grid>

      <Grid container xs={10} direction='column'>
        <Grid item xs={2} className='header'>
          <DashboardHeader />
        </Grid>
        <Grid item xs={10}  className='main-section'>
        <Routes>
        <Route  path="/dashboard" element={<Welcome />} />
        <Route  path="/dashboard" element={<Report />} />
        <Route  path=":dashboardId" element={<Report />} />
      
      </Routes>
        </Grid> 
        
        
      </Grid>
  </Grid>
  )
}

export default Dashboard;


// <Grid item>
//     <Routes>
//       {
//         routes.map((route,key) =>(
//           <Route 
//           key={key}
//           path={route.path}
//           exact={route.exact}
//           children={route.main}
//           />
//         ))
//       }
//       </Routes>
      
//     </Grid>


// const routes = [
//   {
//     path: "/dashboard",
//     exact: true,
//     main: () => <Welcome />  
//   },
//   {
//     path: "/dashboard/report",
//     main: () => <Report />  
//   },
//   {
//     path: "/dashboard/profile",
//     main: () => <Profile />  
//   }
// ];
// <Routes>
//         <Route  path="/dashboard" element={<Welcome />} />
//         <Route  path=":dashboardId" element={<Report />} />
      
//       </Routes>