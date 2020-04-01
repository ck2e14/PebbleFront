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
                  <div className='splash-enter-link'> <Link to='/home'> ENTER </Link> </div>
               </div> 

            </div>


         </>
      )
   }
}