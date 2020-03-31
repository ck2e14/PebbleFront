import React from 'react';
import './PersonCard.css'

const personCard = (props) => {
   return(
      <div className="container">
         <img 
            src="https://www.pinclipart.com/picdir/big/379-3796154_doe-silhouette-clip-art.png" 
            alt="profile-avatar" 
            className='profile-picture' 
            style={{width: '100%'}} 
         />

         <div className="middle">
            <div className="name-text">Ted Kennedy</div>
            <div className="job-position-text"> CEO </div>
         </div>
      </div>
   )
}

export default personCard;