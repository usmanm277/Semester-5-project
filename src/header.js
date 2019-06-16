import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


 export default class Header extends React.Component {
  render(){
    return (
    	<div>


    	<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
          <img style={{background:'#e1bee7',marginTop:'-18px',height:'58px'}} src={require('./LOGO.PNG')} />
        </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
        
                <Link class="nav-link" to="/">Cv Bulider</Link>
            
        </li>
      
        <li class="nav-item">
           <Link class="nav-link" to="/signup/">Sign Up</Link>
        </li>
        <li class="nav-item">
             <Link class="nav-link" to="/login/">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>	)
    }
}











