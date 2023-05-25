/* App.js */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from '../src/MainPage';
import LoginPage from '../src/LoginPage';
import CommunityPage from '../src/CommunityPage';
import ReviewPage from '../src/ReviewPage';
import './App.css';
import SignUpPage from '../src/SignUpPage';
import ReviewCreationPage from '../src/ReviewCreationPage';
import CommunityCreationPage from '../src/CommunityCreationPage';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="frame">
          <nav className="menu">
            <ul>
              <li>
                <Link to="/">메인 페이지</Link>
              </li>
              <li>
                <Link to="/community">커뮤니티 페이지</Link>
              </li>
              <li>
                <Link to="/review">리뷰 페이지</Link>
              </li>
              <li>
                <Link to="/login">로그인 페이지</Link>
              </li>
            </ul>
          </nav>

          <div className="main-content">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/community/create" element={<CommunityCreationPage />} />
              <Route path="/review" element={<ReviewPage />} />
              <Route path="/review/create" element={<ReviewCreationPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
