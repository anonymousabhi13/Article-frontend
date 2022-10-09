import React from "react";
import { Route, Routes } from "react-router";
import  "./SignUp.css";
import SignUpEmailPass from "./SignUpEmailPass/SignUpEmailPass";
import SignUpwithCred from "./SignUpEmailPass/SignUpwithCred";
const SignUp = () => {
  
  return (
    <div className="container">
      <form className="card">
        

        <Routes>
          <Route path="/" element={<SignUpwithCred />}></Route>
          
          <Route exact path="/SignUp" element={<SignUpEmailPass />}></Route>
        </Routes>
      </form>
    </div>
  );
};

export default SignUp;
 