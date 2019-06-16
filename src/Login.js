import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Login  extends React.Component {
render() {
    return (
      <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <br/>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                <label for="inputPassword">Password</label>
              </div>
<br/>
              
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              <hr class="my-4"/>
              <Link class="nav-item nav-link" to="/signup/">Sign Up</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br/><br/><br/><br/><br/><br/>
  </div>
    );
  }
}

export default Login;