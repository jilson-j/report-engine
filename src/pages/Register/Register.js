import { useState } from "react";
import React from "react";
import "./Register.css";
import { Button, TextField, Typography } from "@mui/material";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errorpassword, seterrorPassword] = useState("");
  const Login = () => {
    if(!email || !password){
      if (email == "") {
        setErrorEmail("Please enter email");
      }else{
        setErrorEmail("");
      }
      if (password == "") {
        seterrorPassword("Please enter email");
      }else{
        seterrorPassword("");
      }
    }else{
      seterrorPassword("");
      console.log('form submitted')
    }

  };
  return (
    <div className="container">
      <div className="flex-container">
        <div className="logo-section">
          <h1 className="Typography">Welcome to</h1>
          <h1 className="title"> Doctor Booking App</h1>
          <VaccinesIcon className="Typography" />
        </div>
        <div className="form-section">
          <h3>LOGIN</h3>
          <TextField
            label="Email"
            placeholder="Please enter email"
            className="input-field common"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={erroremail && erroremail.length ? true : false}
            helperText={erroremail}
          />
          <TextField
            label="Password"
            placeholder="Please enter password"
            className="input-field common"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errorpassword && errorpassword.length ? true : false}
            helperText={errorpassword}
          />
          <Button
            type="button"
            className="common"
            variant="contained"
            onClick={Login}
          >
            Login
          </Button>
          <p className="createAccount">Create an Account ?</p>
          <div className="social-media">
            <GoogleIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
