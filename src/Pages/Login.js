import axios from 'axios';
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
        let idText = document.querySelector(".id-wrap .text");
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

    const textChange=(e)=>{
      
        let text = e.target.parentElement.querySelector(".text");
        let closeIcon = e.target.parentElement.getElementsByTagName("button")[0];
        
        
         if(e.target.parentElement.classList.contains("id-wrap")){
            setId(e.target.value);
        }else if(e.target.parentElement.classList.contains("password01")){
            var closeIcon01 = e.target.parentElement.getElementsByTagName("button")[1];
            setPassword(e.target.value);
        }

        if(text.value.length === 0){
            closeIcon.style.display="none";
            
            if(closeIcon01 === undefined) return;
            closeIcon01.style.display="none";
            return;
        }
        closeIcon.style.display="block";
        if(closeIcon01 === undefined) return;
      closeIcon01.style.display="block";
      
    }
  
    const closeBtn= (e)=>{
        let idIcon = e.target.parentElement.parentElement.querySelector(".close-icon");
        
        if(e.target.parentElement.classList.contains("button-wrap")){
            //비번 close버튼 클릭
            if(e.target.parentElement.parentElement.classList.contains("password01")){
                setPassword("");
            }
            let passwordIcon = e.target.parentElement.parentElement.querySelector(".eyes-icon");
passwordIcon.style.display="none";
idIcon.style.display="none";
}else{
 setId("");
 idIcon.style.display="none";
//아이디 close버튼 클릭
        }
    };

    const eyesBtn = (e) =>{
        let passwordText = e.target.parentElement.parentElement.querySelector(".text");
        let passwordIcon = e.target.parentElement.parentElement.querySelector(".eyes-icon");
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

    
    useEffect(() => {
        axios.get('http://localhost:1337/api/register').then((response)=>{
            console.log(response.data)
          })
          .catch((response)=>{
            console.log('실패함',response)
          })
    });

const JoinPage = () =>{
        movePage('/tving/join');
}


  return (
    <div>
    <Nav top={false}></Nav>
    <LoginWrap>
        <LoginTitle>TVING ID 로그인</LoginTitle>
    <div className='login-wrap'>
    <IdPwWrap className='id-wrap'>
   <input type='text' className='text'  onChange={textChange} placeholder='아이디' value={idValue} ></input>
   <button className='close-icon id-icon' onClick={closeBtn}></button>
   </IdPwWrap>
   <IdPwWrap style={{"marginTop":"40px"}} className='password01'>
<input type='password' value={passwordValue} className='text' onChange={textChange} placeholder='비밀번호'></input>
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
        <a href='' onClick={JoinPage}>회원가입 하기</a>
        
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
    align-items: center;
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
