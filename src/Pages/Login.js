import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Nav from "../components/Nav";
// import { ref, set } from 'firebase/database';
import app from "../firebase";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const auth = getAuth(app); // 객체 인증
  const [idValue, setId] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [isJoinPage, setIsJoinPage] = useState(false);
  const [autoLogin, setautoLogin] = useState(false);
  const [userInfor, setUserInfor] = useState([]);
  const navigate = useNavigate();

  const Preparing = () => {
    alert("회원 가입하고 로그인 하시거나 빈 값으로 로그인 해주세요.");
  };

  const ChangeCheck = (e) => {
    setautoLogin(e.target.checked);
  };

  const KAKAO_AUTO_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=profile_nickname,profile_image`;
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTO_URL;
  };
  const googleLogin = () => {
    alert("준비중 입니다.");
  };
  const onSubmit = async (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        console.log("res", res);
        navigate("/main");
      })
      .catch((error) => {
        console.log("error", error);
        alert("가입된 정보가 없습니다.");
      });
  };
  const onSubmitJoin = async (data) => {
    if (data.joinPassword !== data.joinPasswordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        data.joinEmail,
        data.joinPassword
      );

      alert("회원가입을 완료 했습니다.");
      window.location.reload();
    } catch (error) {
      alert("가입 내역이 있습니다. 로그인 해주세요.");
      window.location.reload();
    }
  };
  const joinOpen = () => {
    setIsJoinPage(!isJoinPage);
    reset({
      joinEmail: "",
      joinPassword: "",
      joinPasswordCheck: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <Nav top={false}></Nav>
      <LoginWrap>
        {isJoinPage ? (
          <LoginTitle className="join-wrap">
            <div className="join-text">
              <span className="">회원가입</span>
              <i className=" icon" onClick={joinOpen}></i>
            </div>
            <form onSubmit={handleSubmit(onSubmitJoin)}>
              <input
                type="email"
                placeholder="이메일을 입력해주세요."
                {...register("joinEmail", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />

              <input
                type="password"
                placeholder="비밀번호"
                {...register("joinPassword", {
                  required: true,
                  pattern:
                    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,15}$/,
                })}
              />
              <input
                type="password"
                placeholder="비밀번호 확인"
                {...register("joinPasswordCheck", {
                  required: true,
                  pattern:
                    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,15}$/,
                })}
              />
              <em>영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리</em>
              <input
                type="submit"
                className="join-btn"
                value={"회원가입하기"}
              />
            </form>
          </LoginTitle>
        ) : (
          <>
            <LoginTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  placeholder="이메일을 입력해주세요."
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <input
                  type="password"
                  placeholder="비밀번호"
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,15}$/,
                  })}
                />

                <input
                  type="submit"
                  className="login-btn"
                  value={"로그인하기"}
                />
              </form>
            </LoginTitle>
            <div className="">
              <span className="join" onClick={joinOpen}>
                회원가입
              </span>
            </div>
            <div className="btn-wrap">
              <i className="doLoginBtn icon" onClick={kakaoLogin}></i>
              <i className="doLoginBtn icon google" onClick={googleLogin}></i>
            </div>
          </>
        )}
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
  .btn-wrap {
    display: flex;
    column-gap: 20px;
  }
  p {
    color: #fff;
    font-size: 12px;
  }
  .join {
    color: #b7b7b7;
    cursor: pointer;
    font-size: 14px;
  }
  em {
    color: #b7b7b7;
    font-style: normal;
    font-size: 10px;
    margin-bottom: 7px;
  }
  input {
    outline: none;
  }
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
const LoginTitle = styled.div`
  .join-text {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    & span {
      color: #b7b7b7;
      font-size: 16px;
      display: block;
    }
    & i {
      margin-left: auto;
    }
  }

  > form {
    flex-direction: column;
    row-gap: 15px;
    width: 350px;
    display: flex;
    & input {
      height: 45px;
      padding: 5px;
      box-sizing: border-box;
    }
    .join-btn,
    .login-btn {
      width: 100%;
      border: none;
      height: 40px;
      border-radius: 2px;
      background-color: #ff1744;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
    }
  }
  > form > div {
    /* display: flex; */
    /* flex-direction: column; */
  }
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
