// CommunityCreationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CommunityCreationPage.css';

const CommunityCreationPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제목:', title);
    console.log('내용:', content);
    navigate('/community');
  };

  return (
    <div className="community-container">
      <form onSubmit={handleSubmit}>
        <div className="community-form-field">
          <label htmlFor="title" className="community-form-label">제목:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="community-form-input"
          />
        </div>
        <div className="community-form-field">
          <label htmlFor="content" className="community-form-label">내용:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="community-form-textarea"
          />
        </div>
        <button type="submit" className="community-form-submit-button">글 작성</button>
      </form>
    </div>
  );
};

export default CommunityCreationPage;
