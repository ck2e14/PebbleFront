import React from 'react';
import PersonCard from './PersonDisplay/PersonCard';
import './MainPageTeam.css';    
import Toolbar from '../Toolbar/Toolbar'; 
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';

export default class MainPageTeam extends React.Component {

   state = {
      sideDrawerOpen: false
    };
  
    drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen}
      })
    };
  
    backdropClickHandler = () => {
      this.setState({ sideDrawerOpen: false })
    }

   render(){

      let backdrop;
      if(this.state.sideDrawerOpen) {
         backdrop = <Backdrop click={this.backdropClickHandler}/>
      }

      return(
         <>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop}
               <div className='top-div-teampage' style={{position:'fixed', top: '75px', fontSize: '50px'}}> 
                  <div className='tagline-text'> 
                     Experts in our Field 
                     <span className='tagline-followup-text'> Helping you to achieve the right balance for your business.</span> 
                  </div>
            <PersonCard/>   
            <PersonCard/>
            <PersonCard/>  

            </div>
         </>
      )
   }

}