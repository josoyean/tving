import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
const Nav = ({ top, searchClick, mainPage, setMainPage, search }) => {
  const [handleShow, setHandleShow] = useState(false);
  const [logoutShow, setLogoutShow] = useState(false);
  const movePage = useNavigate();
  const location = useLocation();
  const userData = JSON.parse(localStorage.getItem("data"))?.kakao_account
    .profile.profile_image_url;
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 72) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
      setLogoutShow(false);
    });

    window.addEventListener("click", function (e) {
      e.stopPropagation();
      setLogoutShow(false);
    });

    return () => {
      window.removeEventListener("scroll", function () {});
    };
  }, []);

  const logoClick = (e) => {
    if (location.pathname === "/program") {
      movePage("/main");
    } else if (location.pathname === "/main") {
      movePage("/main");
      setMainPage(true);
    } else if (location.pathname === "/index") {
      movePage("/");
    } else if (location.pathname === "/login") {
      movePage("/");
    }
  };

  const profileClick = (e) => {
    e.stopPropagation();
    setLogoutShow(!logoutShow);
    setMainPage(true);
  };

  const moveLoginPage = () => {
    setLogoutShow(false);
    movePage("/login");
    localStorage.clear();
  };

  if (top) {
    return (
      <MainNavWrapper
        className={`mainNav${handleShow} ${
          logoutShow ? "mainNavtrue" : "mainNavfalse"
        } center`}
      >
        <div className="">
          <div className="nav-left">
            <Logo>
              <img
                alt="Logo"
                src={process.env.PUBLIC_URL + `/images/nav-logo.svg`}
                onClick={(e) => {
                  logoClick(e);
                }}
              />
            </Logo>
          </div>
          <div className="nav-right">
            <div className="search-box" onClick={searchClick}>
              <i className={`icon ${mainPage ? "" : "close"}`}></i>
            </div>
            <div className="profile-wrap" onClick={(e) => profileClick(e)}>
              <img
                alt="profile"
                src={`
                ${localStorage.getItem("data") && userData}
                `}
              ></img>
            </div>
          </div>

          {logoutShow && (
            <div className="logout-box" onClick={moveLoginPage}>
              <span>로그아웃</span>
            </div>
          )}
        </div>
      </MainNavWrapper>
    );
  } else {
    return (
      <NavWrapper className={"nav" + handleShow}>
        <Logo>
          <img
            alt="Logo"
            src={process.env.PUBLIC_URL + `/images/nav-logo.svg`}
            onClick={(e) => {
              logoClick(e);
            }}
          />
        </Logo>
      </NavWrapper>
    );
  }
};

export default Nav;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 99999;
  height: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
const MainNavWrapper = styled.nav`
  position: fixed;
  top: 0;
  padding: 0 calc(3.5vw + 5px);
  box-sizing: border-box;
  left: 0;
  right: 0;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 99999;
  & > div {
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Logo = styled.a`
  padding: 0;
  width: 88px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
