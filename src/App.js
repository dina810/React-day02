//import logo from './logo.svg';
import LoginComponent from './Components/LoginComponent'
import RegisterComponent from './Components/RegisterComponent'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import './App.css';


import React from "react";
import {
  BrowserRouter as Router,Route, Switch} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route path={"/"} exact component={Home}/>
      <Route path={"/login"} exact component={LoginComponent}/>
      <Route path={"/register"} component={RegisterComponent}/>
      </Switch>
    </Router>
  );
}

export default App;
