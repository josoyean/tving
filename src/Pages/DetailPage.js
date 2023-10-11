import React from 'react';
import useNavigate from 'react-router-dom';

const DetailPage = () => {
  const movePage = useNavigate();
  movePage('/index');
  console.log('movePage',movePage)
  // window.location.href='/tving/index';
  return (
    <div>DetailPages</div>
  )
}

export default DetailPage