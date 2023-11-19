import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../Pages/Login.css';
import Nav from '../components/Nav';
function Login() {
    const [idValue,setId] = useState('');
    const [passwordValue,setPassword] = useState('');
    const [eyesIcon,setEyesIcon] = useState(true);
    useEffect(()=>{
        let idText = document.querySelector(".id-text");
        idText.focus();
        Preparing();
        
    },[]);
    const movePage = useNavigate();
    const MainPageMove = ()=>{
        movePage('/tving/main'); 
      }

    const Preparing = () =>{
        alert('작업중입니다. :) 로그인 버튼 클릭 부탁드립니다.');
        
    }
    const idChange=(e)=>{
        setId(e.target.value);
    
        let idText = document.querySelector(".id-text");
        let idIcon = document.querySelector(".id-icon");
        if(idText.value.length === 0){
            idIcon.style.display="none";
            return;
        }
        idIcon.style.display="block";

    }
    const pwChange=(e)=>{
        setPassword(e.target.value);
        let passwordText = document.querySelector(".password-text");
        let passwordIcon = document.querySelector(".password-icon");
       
        if(passwordText.value.length === 0){
            passwordIcon.style.display="none";
            return;
        }
        passwordIcon.style.display="flex";
    
    }

    const closeBtn= (e)=>{
    
        if(e.target.parentElement.classList.contains("button-wrap")){
//비번 close버튼 클릭
setPassword("");
}else{
 setId("");
//아이디 close버튼 클릭
        }
    };

    const eyesBtn = () =>{
        let passwordText = document.querySelector(".password-text");
        let passwordIcon = document.querySelector(".eyes-icon");
        if(eyesIcon){
            passwordText.setAttribute("type","text");
            setEyesIcon(false);
            passwordIcon.classList.add("on");
        }else{
            passwordText.setAttribute("type","password");
            setEyesIcon(true);
            passwordIcon.classList.remove("on");
        }
    }

    const ChangeCheck = (e) =>{

    }
  return (
    <div>
    <Nav top={false}></Nav>
    <LoginWrap>
        <LoginTitle>TVING ID 로그인</LoginTitle>
    <div className='login-wrap'>
        <IdPwWrap>
            
<input type='text' className='id-text'  onChange={idChange} placeholder='아이디를 입력해주세요.' value={idValue} ></input>
    <button className='close-icon id-icon' onClick={closeBtn}></button>
        </IdPwWrap>
        <IdPwWrap style={{"margin-top":"40px"}}>

<input type='password' value={passwordValue} className='password-text' onChange={pwChange} placeholder='비밀번호를 입력해주세요.'></input>
<div className='button-wrap password-icon'>
<button className='close-icon ' onClick={closeBtn}></button>
<button className='eyes-icon' onClick={eyesBtn}></button>

</div>
        </IdPwWrap>
    </div>
    {/* 자동 로그인 체크박스 */}
    <div className='auto-login'>
        <input type='checkbox' id='checkbox-login' onClick={ e => ChangeCheck(e)}></input>
        <label htmlFor='checkbox-login'>자동 로그인</label>
    </div>
    <button className='doLoginBtn' onClick={MainPageMove}>로그인하기</button>

    <div className='find-box'>
        <FindText onClick={Preparing}>아이디 찾기</FindText>
        <FindText onClick={Preparing}>비밀번호 찾기</FindText>
    </div>
    <div className='singup-box'>
        아직 계정이 없으신가요?
        <a href='' onClick={Preparing}>회원가입 하기</a>
        
    </div>
    </LoginWrap>
    </div>
  )
}

export default Login

const LoginWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    height: 100vh;
    overflow: hidden;
    justify-content: center;
`

const FindText = styled.a`
    color: #a3a3a3;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    border-right: 1px solid #2e2e2e;
    box-sizing: border-box;
   padding: 0 35px;
   &:last-child{
    border-right: none;
   }
`
const LoginTitle = styled.span`
color: #fff;
font-size: 30px;
font-weight: bold;
`
const IdPwWrap = styled.div`
    display: flex;
    border-radius: 3px;
    width: 505px;
    height: 65px;
    border-color: #212121;
    box-sizing: border-box;
    background-color: #212121;
    padding: 0 20px;
    align-items: center;
`
