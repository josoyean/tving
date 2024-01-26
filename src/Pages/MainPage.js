import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getRegExp } from "korean-regexp";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import styled from 'styled-components'
import "../Pages/MainPage.css";
import Nav from "../components/Nav";
import Row from "../components/Row";
const MainPage = () => {
  const movePage = useNavigate();
  const focusRef = useRef();
  const [program, setProgram] = useState([]);
  const [mainPage, setMainPage] = useState(true);
  const [searchProgram, setSearchProgram] = useState([]);
  const [onlyTvingProgram, setOnlyTvingProgram] = useState([]);
  const [movie, setMovie] = useState([]);
  const [drama, setDrama] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [titleValue, setTitleValue] = useState("");

  const fetchData = async () => {
    const apiUrl = "date.json";
    const response = await axios.get(apiUrl);
    setProgram(response.data.tvingList);
    console.log("program", program);
  };

  const getTestData = async () => {
    const { data } = await axios.get("date.json");
    return data;
  };
  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: getTestData,
  });

  useEffect(() => {
    // fetchData();
    // alert("작업중입니다. :)");
  }, []);

  const searchClick = () => {
    setTitleValue("");
    setMainPage(!mainPage);
    setSearchProgram([]);
  };
  const TitleChange = (e) => {
    setTitleValue(e.target.value);
  };
  const programCilck = (e, item) => {
    e.stopPropagation();
    movePage("/tving/program", { state: item });
  };
  useEffect(() => {
    if (focusRef.current) {
      // 할당한 DOM 요소가 불러지면 (마운트 되면)
      focusRef.current.focus(); // focus 할당!
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

  useEffect(() => {
    // setProgram(data);
    // console.log("안녕", data);
    // if (program) {
    let onlyArray = [];
    let movieArray = [];
    let entertainmentArray = [];
    let dramaArray = [];
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      if (element.only === true) {
        onlyArray.push(element);
      }

      if (element.type === "예능") {
        entertainmentArray.push(element);
      }

      if (element.type === "영화") {
        movieArray.push(element);
      }

      if (element.type === "드라마") {
        dramaArray.push(element);
      }
    }

    setMovie(movieArray);
    setOnlyTvingProgram(onlyArray);
    setEntertainment(entertainmentArray);
    setDrama(dramaArray);
    // console.log(drama);
    // }
  }, []);

  if (data) {
    console.log("안녕", data);
    return (
      <div>
        <Nav
          top={true}
          searchClick={searchClick}
          mainPage={mainPage}
          setMainPage={setMainPage}
        ></Nav>
        {mainPage === true ? (
          <div>
            {/* <Banner
              program={program && program}
              programCilck={programCilck}
            ></Banner> */}
            <Row title="티빙 TOP 20 프로그램" id="top" program={program}></Row>
            <Row
              title="오직! TVING에서만!!"
              id="only"
              program={onlyTvingProgram}
            ></Row>
            <Row
              title="인기 예능"
              id="entertainment"
              program={entertainment}
            ></Row>
            <Row title="인기 드라마" id="drama" program={drama}></Row>
            <Row title="인기 영화" id="movie" program={movie}></Row>
          </div>
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
