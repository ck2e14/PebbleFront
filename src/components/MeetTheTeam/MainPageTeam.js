import React from 'react';
import PersonCard from './PersonDisplay/PersonCard';
import './MainPageTeam.css';    
import Toolbar from '../Toolbar/Toolbar'; 

export default class MainPageTeam extends React.Component {

   render(){
      return(
         <>
            <Toolbar/>
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