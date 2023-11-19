import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import styled from 'styled-components'
import '../Pages/MainPage.css';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Row from '../components/Row';
const MainPage = () => {
  const movePage = useNavigate();
  const [program,setProgram] = useState([])
  const [mainProgram,setMainProgram] = useState([])
  useEffect(()=>{
   
    fetchData();
    alert('작업중입니다. :)');
  },[])
  
  const fetchData = async() => {
    const apiUrl = 'date.json';
    const response = await axios.get(apiUrl);
    setProgram(response.data.tvingList);
      console.log(response)
    }

    
//  useEffect(()=>{
//    let pensByColors = program.sort((a,b) => {
//      return  (b.date - a.date)
//     });
//     setMainProgram(pensByColors)
    
//   },[program,mainProgram])



  return (
    // <Contaner>
    <div>

    <Nav top={true}></Nav>
    <Banner program={program !== '' ? program :" "}></Banner>
    {/* <Category></Category> */}
 <Row title='티빙 TOP 20 프로그램' id='top' program={program}></Row>
 {/*    <Row title='Top Rated' id='TR' fetchUrl={requests.fatchTopRated}></Row>
    <Row title='Action Movies' id='AM' fetchUrl={requests.fatchActionMovies}></Row>
  <Row title='Comedy Movies' id='CN' fetchUrl={requests.fatchComedyMovies}></Row> */}
  </div>
  // </Contaner> 
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