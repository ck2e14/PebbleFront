import React from 'react';
import './SideDrawer.css'; 
import { Link } from 'react-router-dom'



const sideDrawer = props => {
   let drawerClasses = 'side-drawer';
   if(props.show) {
      drawerClasses = 'side-drawer open' 
   };

   return (
      <nav className={drawerClasses}>
         <ul>
            <li> <Link to="/mission">Our Mission </Link> </li>
            <li> <Link to='/team'>Meet the Team </Link> </li>
            <li> <Link to='/success-stories'> Success Stories </Link> </li>
         </ul>
      </nav>
   )
};

export default sideDrawer