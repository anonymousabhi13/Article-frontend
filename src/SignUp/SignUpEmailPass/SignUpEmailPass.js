import React from "react";
import './SignUpEmailPass.css'
const SignUpEmailPass = () => {
  return (
    <div className="container">
      <form className="cards">
        <div className="mb-3 mt-2">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your email"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
      
        <button type="submit" className="btn btn-primary mb-5">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUpEmailPass;
