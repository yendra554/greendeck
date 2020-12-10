import React from "react";
import loginImg from "../../login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

 
 render(){
   return (
   <div class="row">
   	<div className="col-md-3 center">
   	 <form>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header"><h1>Login</h1></div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
              <div className="form-group" align="center">
              <label htmlFor="username"><b>Email</b></label>
              <br/>
              <input type="email" name="email" placeholder="email" />
          </div>
          <div className="form-group">
              <label htmlFor="password"><b>Password</b></label>
              <br/>
              <input type="password" name="password" placeholder="password" />
          </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
      </form>
     </div>
   </div>
    );
  }
}