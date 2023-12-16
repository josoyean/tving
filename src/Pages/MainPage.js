import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import styled from 'styled-components'
import '../Pages/MainPage.css';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Row from "../components/Row";
const MainPage = () => {
  const movePage = useNavigate();
  const [program,setProgram] = useState([]);
  const [mainProgram,setMainProgram] = useState([]);
  const [onlyTvingProgram,setOnlyTvingProgram]=useState([]);
  const [movie,setMovie]=useState([]);
  useEffect(()=>{
    fetchData();
    alert('작업중입니다. :)');
  },[])
  
  const fetchData = async() => {
    const apiUrl = 'date.json';
    const response = await axios.get(apiUrl);
    setProgram(response.data.tvingList);
}

useEffect(()=>{
  let onlyArray=[];
  let movieArray=[];
  for (let index = 0; index < program.length; index++) {
    const element = program[index];
    if(element.only === true){
      onlyArray.push(element);
    }

    if(element.type === "예능"){
      movieArray.push(element);
    }

  }
  setMovie(movieArray);
  setOnlyTvingProgram(onlyArray);
},[program]);



  return (
    <div>
    <Nav top={true}></Nav>
    <Banner program={program !== '' ? program :" "}></Banner>
    <Row title='티빙 TOP 20 프로그램' id='top' program={program}></Row>
    <Row title='오직! TVING에서만!!' id='only' program={onlyTvingProgram}></Row>
    <Row title='인기 예능' id='movie' program={movie}></Row>
  
  </div>
  )

}
export default MainPage

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
`