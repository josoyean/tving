import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Pages/ProgramInfor.css";
import Nav from "../components/Nav";

const ProgramInfor = () => {
  const location = useLocation();
  const userInfo = { ...location.state };
  const [programData, setprogramData] = useState();

  console.log("안녕", userInfo);
  alert("작업중입니다.");
  return (
    <div>
      <Nav top={true}></Nav>
      <div className="main-box">
        <img alt="background" src={userInfo.background}></img>
        <div className="main-infor">
          <span className="title">{userInfo.title}</span>
          <div className="infor">
            <span>{userInfo.channel}</span>
            <span>{userInfo.genre}</span>
            <span>{userInfo.type}</span>
          </div>
          <div className="button-box">
            <button>
              <i></i>
              <span>1화 시청하기</span>
            </button>
          </div>
          <span className="inform-text">{userInfo.subtitle}</span>
        </div>
        <div className="thumbnail">
          <img alt="thumbnail" src={userInfo.thumbnail}></img>
        </div>
      </div>
    </div>
  );
};

export default ProgramInfor;
