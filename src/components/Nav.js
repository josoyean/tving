import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const Nav = () => {
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
  return (
    <NavWrapper show={handleShow + ''}>
      <Logo>
        <img alt='Disney Plus Logo' src='/images/img_tving-symbol.svg' onClick={()=>{window.location.href='/'}}/>
      </Logo>
    </NavWrapper>
  )
}

export default Nav

const NavWrapper = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
background-color: ${props => props.show ? '#fff': 'transparent'};
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 16px;
z-index: 5;
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