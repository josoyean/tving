import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../components/Row.css";
import ModalIndex from "./MovieModal/ModalIndex";
const Row = ({ title, id, program }) => {
  const [topProgram, setTopProgram] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const movePage = useNavigate();

  const fetchMovieData = useCallback(() => {
    let programViews =
      program &&
      program.sort((a, b) => {
        return b.views - a.views;
      });
    setTopProgram(programViews);
  }, [program]);

  useEffect(() => {
    fetchMovieData();
    // console.log("program", program);
  }, [program]);

  const hendleClick = (movie) => {
    setModalOpen(true);
  };

  const clickProgram = (topProgram, e) => {
    movePage("/tving/program", { state: topProgram });
    // movePage("/tving/program", { state: topProgram, search: true });
  };
  return (
    <RowBox>
      <Title>{title}</Title>
      <div className="slider">
        <div
          className="slider__arrow-left"
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth + 80;
          }}
        >
          <span className="arrow">{"<"}</span>
        </div>
        <div id={id} className="row__posters">
          {program &&
            program.map(
              (topProgram, numProgram) =>
                numProgram + 1 <= 10 && (
                  <div
                    key={topProgram.id}
                    onClick={(e) => {
                      clickProgram(topProgram, e);
                    }}
                  >
                    <TopProgramNum>{numProgram + 1}</TopProgramNum>{" "}
                    <img
                      className="row__poster"
                      key={topProgram.id}
                      src={topProgram.thumbnail}
                      alt={topProgram.title}
                    ></img>
                    {topProgram.new === true && (
                      <span className="newLable">NEW</span>
                    )}
                  </div>
                )
            )}
        </div>
        <div
          className="slider__arrow-right"
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth + 80;
          }}
        >
          <span className="arrow">{">"}</span>
        </div>
      </div>
      {modalOpen && (
        <ModalIndex {...movieSelected} setModalOpen={setModalOpen}></ModalIndex>
      )}
    </RowBox>
  );
};

export default Row;

const Title = styled.h2`
  color: #fff;
  text-align: center;
`;
const TopProgramNum = styled.span`
  color: #fff;
  font-size: 65px;
  font-weight: bolder;
  position: absolute;
  left: 30px;
  bottom: 0;
  z-index: 99099;
`;
const RowBox = styled.div`
  margin-bottom: 25px;
`;
