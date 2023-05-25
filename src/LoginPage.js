import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 로그인 처리 로직을 추가하세요
    console.log('Username:', username);
    console.log('Password:', password);
    // 로그인 성공 또는 실패에 따른 처리를 수행하세요
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
        <div className="form-group">
          <label htmlFor="username">아이디:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          로그인
        </button>
        <button type="button" className="signup-button" onClick={handleSignUp}>
          회원가입
        </button>
    </div>
  );
};

export default LoginPage;
