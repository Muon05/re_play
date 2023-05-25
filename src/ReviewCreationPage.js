// ReviewCreationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewCreationPage.css';

const ReviewCreationPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제목:', title);
    console.log('내용:', content);
    console.log('이미지:', image);
    navigate('/review');
  };

  return (
    <div className="review-container">
      <div className="review-form-container">
        <form onSubmit={handleSubmit}>
          <div className="review-form-field">
            <label htmlFor="review-title" className="review-form-label">제목:</label>
            <input
              type="text"
              id="review-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="review-form-input"
            />
          </div>
          <div className="review-form-field">
            <label htmlFor="review-content" className="review-form-label">내용:</label>
            <textarea
              id="review-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="review-form-textarea"
            />
          </div>
          <div className="review-form-field">
            <label htmlFor="review-image" className="review-form-label">이미지:</label>
            <input
              type="file"
              id="review-image"
              onChange={(e) => setImage(e.target.files[0])}
              className="review-form-input"
            />
          </div>
          <button type="submit" className="review-form-submit-button">글 작성</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewCreationPage;
