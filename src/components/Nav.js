import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const Nav = ({top}) => {
  console.log('top',top)
  const [handleShow,setHandleShow] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',function () {
      if(window.screenY>50){
        setHandleShow(true)
      }else{
        setHandleShow(false)
      }
    });
    return ()=>{
      window.removeEventListener('scroll',function(){

      })
    }
  },[])
  if(top){
    return (
      <NavWrapper show={handleShow + ''}>
        <div className='nav-left'>
      <Logo>
        <img alt='Logo' src={process.env.PUBLIC_URL+`/images/nav-logo.svg`} onClick={()=>{window.location.href='/login'}}/>
      </Logo>
      
        </div>
        <div className='nav-right'></div>
     
    </NavWrapper>
  )
  }else{
    return (
      <NavWrapper show={handleShow + ''}>
      <Logo>
        <img alt='Logo' src={process.env.PUBLIC_URL+`/images/nav-logo.svg`} onClick={()=>{window.location.href='/login'}}/>
      </Logo>
     
    </NavWrapper>
  )
}
}

export default Nav

const NavWrapper = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
background-color: ${props => props.show ? '#000': 'transparent'};
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 16px;
z-index: 99999;
height: 72px;
`;

const Logo = styled.a`
padding: 0;
width: 88px;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display: inline-block;
img{
display: block;
width: 100%;

}
`