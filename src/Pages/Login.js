import React, { useState } from 'react';
import styled from 'styled-components';
import '../Pages/Login.css';
function Login() {
    const [idValue,setId] = useState('');
    const [passwordValue,setPassword] = useState('');


    const idChange=(e)=>{
        setId(e.target.value);
    }
    const pwChange=(e)=>{
        setPassword(e.target.value);
    }
  return (
    <div>
        <LoginTitle>TVING ID 로그인</LoginTitle>
    <div className='login-wrap'>
        <IdPwWrap>
            
<input type='text' className='id-text' onChange={idChange} placeholder='아이디를 입력해주세요.' value={idValue}></input>
    <button>X</button>
        </IdPwWrap>
        <IdPwWrap>

<input type='password' value={passwordValue} className='password-text' onChange={pwChange} placeholder='비밀번호를 입력해주세요.'></input>
<button>X</button>
        </IdPwWrap>
    </div>
    </div>
  )
}

export default Login

const LoginTitle = styled.span`
color: #fff;
`
const IdPwWrap = styled.div`
    border-radius: 3px;
    width: 505px;
    height: 65px;
    border-color: #212121;
    box-sizing: border-box;
    background-color: #212121;
    padding: 0 20px;
`
