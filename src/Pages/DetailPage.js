import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DetailPage = () => {
  const movePage = useNavigate();
  useEffect(()=>{
    console.log('DetailPage')
    // movePage('/');
    
  },[])

  return (
    <div>DetailPages</div>
  )
}

export default DetailPage