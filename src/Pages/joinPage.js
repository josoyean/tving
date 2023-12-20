import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Nav from '../components/Nav';
import './JoinPage.css';
import './Login.css';
function JoinPage() {
    const [id,setId] = useState('');
    const [email,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [eyesIcon,setEyesIcon] = useState(true);
    const movePage = useNavigate();
    const textChange=(e)=>{
      
        let text = e.target.parentElement.querySelector(".text");
        let closeIcon = e.target.parentElement.getElementsByTagName("button")[0];
        
        
        if(e.target.parentElement.classList.contains("email-wrap")){
            setEmail(e.target.value);
        }else if(e.target.parentElement.classList.contains("id-wrap")){
            setId(e.target.value);
        }else if(e.target.parentElement.classList.contains("password")){
            var closeIcon01 = e.target.parentElement.getElementsByTagName("button")[1];
            setPassword(e.target.value);
        }else if(e.target.parentElement.classList.contains("confirmPassword")){
            setConfirmPassword(e.target.value);
            var closeIcon01 = e.target.parentElement.getElementsByTagName("button")[1];
        }  
        
        textValue();
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
  
    const textValue = (e) =>{
       
       document.querySelector(".doJoinBtn").classList.remove("active");
        if(document.querySelectorAll(".text")[0].value.length === 0){
            // alert("ID를 입력해주세요.");
            // document.querySelectorAll(".text")[0].focus();
            return
        }
        
        if(document.querySelectorAll(".text")[1].value.length === 0){
            // alert("비밀번호를 입력해주세요.");
            // document.querySelectorAll(".text")[1].focus();
            return
        }
        if(document.querySelectorAll(".text")[2].value.length === 0){
            // alert("비밀번호를 입력해주세요.");
            // document.querySelectorAll(".text")[2].focus();
            return
        }
        if(document.querySelectorAll(".text")[3].value.length === 0){
            // alert("이메일을 입력해주세요.");
            // document.querySelectorAll(".text")[3].focus();
            return
        }
        
       document.querySelector(".doJoinBtn").classList.add("active");
    }

    const closeBtn= (e)=>{
        document.querySelector(".doJoinBtn").classList.remove("active");
        let idIcon = e.target.parentElement.querySelector(".close-icon");
        if(e.target.parentElement.classList.contains("button-wrap")){
            if(e.target.parentElement.parentElement.classList.contains("password")){
                setPassword("");
            }else{
                setConfirmPassword("");
            }
 let eyesIcon = e.target.parentElement.parentElement.querySelector(".eyes-icon");
 eyesIcon.style.display="none";
idIcon.style.display="none";
}else if(e.target.parentElement.classList.contains("id-wrap")){
 setId("");
 idIcon.style.display="none";
//아이디 close버튼 클릭
}else{
    idIcon.style.display="none";
    setEmail("");
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

    const MainPageMove = (e) => {
        e.preventDefault();
        if(e.target.classList.contains("active") === false) return
        console.log(password);
        if(confirmPassword !== password ){
            return  alert("비밀번호가 일치하지 않습니다. 확인해주세요.");
            
        }

        axios.post('http://localhost:1337/api/user-infors', {
    data:{
        password: escape(password),
        name: id,
        email: email,
        autologin:false,
    },
  })
  .then(response => {
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    console.log('User token', response.data.data.attributes);
    console.log('User token', response);
   //localStorage.setItem('token',response.data.jwt);
  alert("가입이 완료 되었습니다.");
   movePage('/tving/login'); 
    
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
       

    }
  return (
    <div>
    <Nav top={false}></Nav>
    <LoginWrap>

   <LoginTitle>티빙 회원가입</LoginTitle>
   <LoginSubTitle>아이디와 이메일로 간편하게 티빙을 시작하세요!</LoginSubTitle>
    <div className='login-wrap'>
   <IdPwWrap className='id-wrap'>
   <input type='text' className='text'  onChange={textChange} placeholder='아이디' value={id} ></input>
   <button className='close-icon id-icon' onClick={closeBtn}></button>
   </IdPwWrap>
   <Infor>영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리</Infor>
   <IdPwWrap style={{"marginTop":"20px"}} className='password'>
<input type='password' value={password } className='text' onChange={textChange} placeholder='비밀번호'></input>
<div className='button-wrap password-icon'>
<button className='close-icon ' onClick={closeBtn}></button>
<button className='eyes-icon' onClick={eyesBtn}></button>
</div>
    </IdPwWrap>
    <IdPwWrap style={{"marginTop":"10px"}} className='confirmPassword'>

<input type='password' value={confirmPassword} className='text' onChange={textChange} placeholder='비밀번호 확인'></input>
<div className='button-wrap password-icon'>
<button className='close-icon ' onClick={closeBtn}></button>
<button className='eyes-icon' onClick={eyesBtn}></button>
</div>
    </IdPwWrap>
    <Infor>영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리</Infor>
    <IdPwWrap className='email-wrap'>
   <input type='text' className='text'  onChange={textChange} placeholder='이메일' value={email} ></input>
   <button className='close-icon' onClick={closeBtn}></button>
   </IdPwWrap>
    </div>
   <button className='doJoinBtn' onClick={MainPageMove}>가입하기</button>
    </LoginWrap>
    </div>
  )
}

export default JoinPage

const LoginTitle = styled.span`
color: #fff;
font-size: 30px;
font-weight: bold;
`
const Infor = styled.span`
color: #6e6e6e;
font-size: 13px;
margin: 5px 0 25px;
display: block;
    text-align: left;
`
const LoginSubTitle = styled.span`
color: #a3a3a3;
font-size: 18px;
font-weight: normal;
`
const LoginWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    height: 100vh;
    overflow: hidden;
    justify-content: center;
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

