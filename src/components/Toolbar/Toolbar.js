import React from 'react';
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import { Link } from 'react-router-dom'


const toolbar = props => (
   <header className="toolbar"> 
      <nav className="toolbar_navigation" > 
         <div className="toolbar_toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler}/>
         </div>
         <div className="toolbar_logo-container"> <Link to="/home"> <img className="toolbar_logo" src="https://icons-for-free.com/iconfiles/png/512/stones-1319987875621855568.png"/></Link>  Pebble Solutions </div>
         <div className="spacer"></div>
         <div className="toolbar_navigation-items"> 
            <ul>
               <li> <Link to="/mission">Our Mission</Link> </li>
               <li> <Link to='/team'> Meet the Team</Link> </li>
               <li> <Link to='/success-stories'>Success Stories</Link> </li>
            </ul>
         </div>
      </nav>
   </header>
);


export default toolbar;     

