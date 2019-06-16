import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CvBulider from './cv.js';
import Header from './header.js';
import Footer from './footer.js';
import Login from './Login.js';
import signUp from './signUp.js';
function About() {
  return <h2>About</h2>;
}

function LoginIn() {
  return (<div>
  <Header/>
      <Login/>
      <Footer/>
      </div>);

}

function Index() {
  return (<div>
  <Header/>
      <CvBulider/>
      <Footer/>
      </div>);
}

function AppRouter() {
  return (
    <Router>
      <div>


        <Route path="/" exact component={Index} />
        <Route path="/signup/" component={signUp} />
         <Route path="/login/" component={LoginIn} />
      </div>
    </Router>
  );
}

export default AppRouter;