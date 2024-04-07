import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
function ProgramPage({ data, program, programCilck }) {
  const [onlyTvingProgram, setOnlyTvingProgram] = useState([]);
  const [movie, setMovie] = useState([]);
  const [drama, setDrama] = useState([]);
  const [entertainment, setEntertainment] = useState([]);

  useEffect(() => {
    let onlyArray = [];
    let movieArray = [];
    let entertainmentArray = [];
    let dramaArray = [];
    console.log("data", data);
    console.log("program", program);
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
  }, [program]);

  return (
    <div>
      <Banner program={program} programCilck={programCilck}></Banner>
      <Row
        title="티빙 TOP 10 프로그램"
        id="top"
        program={data}
        programCilck={programCilck}
      ></Row>
      <Row
        title="오직! TVING에서만!!"
        id="only"
        program={onlyTvingProgram}
      ></Row>
      <Row
        title="인기 예능"
        id="entertainment"
        program={entertainment}
        programCilck={programCilck}
      ></Row>
      <Row
        title="인기 드라마"
        id="drama"
        program={drama}
        programCilck={programCilck}
      ></Row>
      <Row
        title="인기 영화"
        id="movie"
        program={movie}
        programCilck={programCilck}
      ></Row>
    </div>
  );
}

export default ProgramPage;
