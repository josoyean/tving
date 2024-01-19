import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
const Nav = ({ top }) => {
  const [handleShow, setHandleShow] = useState(false);
  const movePage = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 72) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", function () {});
    };
  }, []);

  const logoClick = (e) => {
    if (location.pathname === "/tving/program") {
      movePage("/tving/main");
    } else if (location.pathname === "/tving/main") {
      movePage("/tving/main");
    } else if (location.pathname === "/tving/index") {
      movePage("/tving/index");
    } else if (location.pathname === "/tving/login") {
      movePage("/tving/index");
    }
  };

  if (top) {
    return (
      <MainNavWrapper className={"mainNav" + handleShow}>
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
          {/* <button className='icon search'></button> */}
          <div className="profile-wrap">
            <img
              alt="profile"
              src={process.env.PUBLIC_URL + `/images/profile.jpg`}
            ></img>
          </div>
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
            // onClick={() => {
            //   window.location.href = "/tving/login";
            // }}
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
  /* background-color: ${(props) => (props.show ? "#fff" : "#000")}; */
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
  /* background-color: ${(props) => (props.show ? "transparent" : "#000")}; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 99999;
  height: 72px;
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
