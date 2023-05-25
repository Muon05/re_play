/* SignUpPage.js */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css'; // SignUpPage.css 파일을 임포트합니다.

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 회원가입 처리 로직을 추가하세요
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Nickname:', nickname);
    // 회원가입 성공 또는 실패에 따른 처리를 수행하세요
  };

  return (
    <div className="signup-container"> {/* 수정: 클래스 이름 변경 */}
      <form onSubmit={handleSubmit}>
        <div className="form-group"> {/* 수정: 클래스 이름 변경 */}
          <label htmlFor="username">아이디:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group"> {/* 수정: 클래스 이름 변경 */}
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group"> {/* 수정: 클래스 이름 변경 */}
          <label htmlFor="nickname">닉네임:</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <button type="submit" className="signup-button">회원가입</button>
      </form>
    </div>
  );
};

export default SignUpPage;
