import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Pages/ProgramInfor.css";
import Nav from "../components/Nav";
import Row from "../components/Row";
import VideoComponert from "../components/VideoComponert";

const ProgramInfor = () => {
  const location = useLocation();
  const userInfo = { ...location.state };
  const [mainPage, setMainPage] = useState(true);
  const [contentsData, setContentsData] = useState();
  const [isLikeBtn, setIsLikeBtn] = useState(false);

  const LikeClick = (e) => {
    setIsLikeBtn(!isLikeBtn);
  };

  useEffect(() => {
    alert("작업중입니다.");
    const result =
      userInfo.all &&
      userInfo.all.filter((item) => {
        return item.genre === userInfo.genre;
      });
    setContentsData(result);
  }, []);

  return (
    <div>
      <Nav
        top={true}
        mainPage={true}
        search={false}
        setMainPage={setMainPage}
      ></Nav>
      <div className="main-box">
        <img alt="background" src={userInfo.select.background}></img>
        <div className="main-infor">
          <span className="title">{userInfo.select.title}</span>
          <div className="infor">
            <span className={userInfo.select.channel === "" ? "hide" : null}>
              {userInfo.select.channel}
            </span>
            <span className={userInfo.select.genre === "" ? "hide" : null}>
              {userInfo.select.genre}
            </span>
            <span className={userInfo.select.type === "" ? "hide" : null}>
              {userInfo.select.type}
            </span>
          </div>
          <div className="button-box">
            <button className="play-btn">
              <span>1화 시청하기</span>
            </button>
            <button
              className={`like-btn ${isLikeBtn && "action"}`}
              onClick={(e) => LikeClick(e)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M0 0h32v32H0z" fill="transparent"></path>
                <g data-name="패\uC2A4 4347" fill="none">
                  <path d="M16 31.5l-2.175-1.979C6.1 22.523 1 17.907 1 12.242A8.165 8.165 0 019.25 4 8.984 8.984 0 0116 7.133 8.984 8.984 0 0122.75 4 8.165 8.165 0 0131 12.242c0 5.665-5.1 10.281-12.822 17.293z"></path>
                  <path
                    d="M16.004 29.34l1.15-1.037c3.73-3.386 6.951-6.31 9.107-8.95 2.17-2.658 3.138-4.851 3.138-7.11v-.016a6.604 6.604 0 00-1.924-4.707 6.522 6.522 0 00-4.713-1.92 7.382 7.382 0 00-5.548 2.575L16 9.589l-1.214-1.414A7.384 7.384 0 009.233 5.6a6.522 6.522 0 00-4.708 1.92A6.604 6.604 0 002.6 12.227v.015c0 2.264.972 4.461 3.151 7.124 2.164 2.644 5.397 5.572 9.141 8.963l.01.008 1.102 1.004M16 31.499l-2.175-1.978C6.099 22.523 1 17.907 1 12.242A8.165 8.165 0 019.25 4 8.984 8.984 0 0116 7.133 8.984 8.984 0 0122.75 4 8.165 8.165 0 0131 12.242c0 5.665-5.1 10.281-12.823 17.294L16 31.499z"
                    fill="#fff"
                  ></path>
                </g>
              </svg>
              <span>좋아요</span>
            </button>
          </div>
          <span className="inform-text">{userInfo.select.subtitle}</span>
        </div>
        <div className="thumbnail">
          <img alt="thumbnail" src={userInfo.select.thumbnail}></img>
        </div>
      </div>
      <div className="video-list">
        <span
          className="left"
          onClick={() => {
            document.getElementById("video-box").scrollLeft -=
              window.innerWidth + 80;
          }}
        >
          {"<"}
        </span>
        <div className="video-list-box" id="video-box">
          {userInfo.select.videoList &&
            userInfo.select.videoList.map((item, index) => {
              return (
                <VideoComponert
                  key={index}
                  count={index + 1}
                  videoInfom={item}
                ></VideoComponert>
              );
            })}
        </div>
        <span
          className="right"
          onClick={() => {
            document.getElementById("video-box").scrollLeft +=
              window.innerWidth + 80;
          }}
        >
          {">"}
        </span>
      </div>
      <div className="relate-box">
        <Row
          title="비슷한 콘텐츠"
          id="relate-content"
          program={contentsData}
        ></Row>
      </div>
    </div>
  );
};

export default ProgramInfor;
