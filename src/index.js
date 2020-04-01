import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import Splash from './components/SplashPage/Splash';
import MainPageTeam from './components/MeetTheTeam/MainPageTeam'

const app = (
  <BrowserRouter>
    <Route exact path='/' component={Splash} /> 
    <Route path='/home' component={App} />
    <Route path="/team" component={MainPageTeam} /> 
  </BrowserRouter>
);

ReactDOM.render( app, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
