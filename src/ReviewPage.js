import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ReviewPage = () => {
  const navigate = useNavigate();

  const handleWriteReview = () => {
    navigate('/review/create');
  };

  return (
    <div className="review-container">
      <h2 className="review-title">리뷰 페이지</h2>
      <p className="review-content">리뷰 내용이 여기에 표시됩니다.</p>
      <button onClick={handleWriteReview} className="review-write-button">리뷰 작성</button>
    </div>
  );
};

export default ReviewPage;
