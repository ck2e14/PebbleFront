import React from 'react';
import { Route, Link } from "react-router-dom";
import './Splash.css';

export default class Splash extends React.Component {
   render(){

   
      return(
         <>
            <div className='splash-background'> 
               <div className='splash-box-centre'>
                  <h2 className='splash-text'> Pebble Solutions </h2>
                  <h3 className='splash-text-tagline'> Delivering and securing a succesful trajectory for your business </h3>
                  <div className='splash-enter-link'> <Link to='/home'> DISCOVER MORE </Link> </div>
               </div> 
            </div>
         </>
      )
   }
}