import React from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop';
import FrontPage from './components/FrontPage/FrontPage';
import MainPageTeam from './components/MeetTheTeam/MainPageTeam'
import Splash from './components/SplashPage/Splash';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


class App extends React.Component {

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

  return (
    <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
    </div>
  );
}
  
}


export default App;
