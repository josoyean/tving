import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../Pages/Login.css';
function Login() {
    const [idValue,setId] = useState('');
    const [passwordValue,setPassword] = useState('');
    const [eyesIcon,setEyesIcon] = useState(true);

    useEffect(()=>{
        let idText = document.querySelector(".id-text");
        idText.focus();
        
    },[]);
    const idChange=(e)=>{
        setId(e.target.value);
        // console.log(id.value.length);
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
  return (
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
    </LoginWrap>
  )
}

export default Login

const LoginWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
    height: 100vh;
    overflow: hidden;
    justify-content: center;
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
