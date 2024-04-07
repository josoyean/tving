import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../Pages/Login.css";
import Nav from "../components/Nav";
function Login() {
  const [idValue, setId] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [eyesIcon, setEyesIcon] = useState(true);
  const [autoLogin, setautoLogin] = useState(false);
  const [userInfor, setUserInfor] = useState([]);
  const navigate = useNavigate();

  const Preparing = () => {
    alert("회원 가입하고 로그인 하시거나 빈 값으로 로그인 해주세요.");
  };

  const ChangeCheck = (e) => {
    setautoLogin(e.target.checked);
  };
  // console.log(process.env.REACT_APP_REDIRECT_URI);
  console.log(".env사용 안함");

  const KAKAO_AUTO_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=profile_nickname,profile_image`;
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTO_URL;
  };

  return (
    <div>
      <Nav top={false}></Nav>
      <LoginWrap>
        <LoginTitle>TVING 카카오톡 로그인</LoginTitle>

        <button className="doLoginBtn" onClick={kakaoLogin}>
          카카오톡으로 로그인하기
        </button>
      </LoginWrap>
    </div>
  );
}

export default Login;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const FindText = styled.a`
  color: #a3a3a3;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  border-right: 1px solid #2e2e2e;
  box-sizing: border-box;
  padding: 0 35px;
  &:last-child {
    border-right: none;
  }
`;
const LoginTitle = styled.span`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;
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
`;
