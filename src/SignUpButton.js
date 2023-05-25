import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const SignUpButton = () => {
  return (
    <Link to="/signup" className="login-button signup-button">회원가입</Link>
  );
};

export default SignUpButton;
