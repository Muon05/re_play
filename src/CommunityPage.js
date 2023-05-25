import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CommunityPage = () => {
  const navigate = useNavigate();

  const handleWritePost = () => {
    navigate('/community/create');
  };

  return (
    <div>
      <h2>커뮤니티 페이지</h2>
      <p>커뮤니티 글 내용이 여기에 표시됩니다.</p>
      <button onClick={handleWritePost}>글 작성</button>
    </div>
  );
};

export default CommunityPage;
