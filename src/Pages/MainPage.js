import { getRegExp } from "korean-regexp";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../api/axios";
import ProgramPage from "./ProgramPage";
// import styled from 'styled-components'
import "../Pages/MainPage.css";
import Nav from "../components/Nav";
const MainPage = () => {
  const movePage = useNavigate();
  const focusRef = useRef();
  const [program, setProgram] = useState([]);
  const [mainPage, setMainPage] = useState(true);
  const [searchProgram, setSearchProgram] = useState([]);
  const [titleValue, setTitleValue] = useState("");

  // console.log("안녕");
  useEffect(() => {
    instance
      .get()
      .then((res) => {
        console.log("res", res);
        setProgram(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });

    // console.log("program", program);
  }, []);

  const searchClick = () => {
    setTitleValue("");
    setMainPage(!mainPage);
    setSearchProgram([]);
  };
  const TitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, [mainPage]);

  useEffect(() => {
    if (titleValue === "") {
      setSearchProgram([]);
    } else {
      const searchArray =
        program &&
        program.filter((item, index) => {
          const text = item.title.replace(/\s/g, "");
          return text.search(getRegExp(titleValue)) !== -1;
        });
      setSearchProgram(searchArray);
    }
  }, [titleValue]);

  const programCilck = (e, item) => {
    e.stopPropagation();
    movePage("/program", { state: { select: item, all: program } });
  };
  console.log("program", program);
  if (program) {
    return (
      <div>
        <Nav
          top={true}
          searchClick={searchClick}
          mainPage={mainPage}
          setMainPage={setMainPage}
        ></Nav>
        {mainPage === true ? (
          <ProgramPage
            data={program}
            program={program}
            programCilck={programCilck}
          ></ProgramPage>
        ) : (
          <div className="mainSearchWrap">
            <div className="search-input">
              <label>
                <input
                  type="text"
                  className="text"
                  onChange={TitleChange}
                  placeholder="프로그램 제목을 입력해주세요."
                  value={titleValue}
                  ref={focusRef}
                ></input>
              </label>
            </div>
            <div className="box">
              {searchProgram.length === 0 ? (
                <span>프로그램 이름을 검색 해주세요.</span>
              ) : (
                <div className="search-box">
                  {searchProgram.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={(e) => {
                          programCilck(e, item);
                        }}
                      >
                        <img src={item.thumbnail} alt="searchProgram"></img>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
};
export default MainPage;

const Contaner = styled.main`
  background-color: #000;
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;

  &::after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
