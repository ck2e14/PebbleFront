import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import Splash from './components/SplashPage/Splash';
import MainPageTeam from './components/MeetTheTeam/MainPageTeam'
import SuccessStories from './components/SuccessStories/SuccessStoriesContainer';
import OurMission from './components/OurMission/OurMissionContainer';

const app = (
  <BrowserRouter>
    <Route exact path='/' component={Splash} /> 
    <Route path='/home' component={App} />
    <Route path="/team" component={MainPageTeam} />
    <Route path='/success-stories' component={SuccessStories} /> 
    <Route path='/mission' component={OurMission} />
  </BrowserRouter>
);

ReactDOM.render( app, document.getElementById('root') );
serviceWorker.unregister();
