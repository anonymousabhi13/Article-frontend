import React from "react";

const SignUpwithCred = () => {
  return (
    <div>
    <h2>Join with Us.</h2>
      <button type="button" className="btn btn-light mb-2">
        <i className="ri-google-fill"></i>SignUp with Google
      </button>
      <button type="button" className="btn btn-light mb-2">
        <i className="ri-facebook-box-fill"></i>SignUp with Facebook
      </button>
      <button type="button" className="btn btn-light mb-2">
        <i className="ri-mail-fill"></i>SignUp with Email
      </button>
      <a href="/SignUp" className="btn ">
        Don't have account? SignUp.
      </a>
    </div>
  );
};

export default SignUpwithCred;
