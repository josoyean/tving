import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import styled from 'styled-components'
import '../Pages/MainPage.css';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
const MainPage = () => {
  const movePage = useNavigate();
  alert('작업중입니다. :)')
  useEffect(()=>{
    console.log('movePage')
    // movePage('/');
    
  },[])
  return (
    <Contaner>
    <Nav top={true}></Nav>
    <Banner></Banner>
    {/* <Category></Category> */}
    {/* <Row title='Trending Now' id='TN' fetchUrl={requests.fatchTrending}></Row>
    <Row title='Top Rated' id='TR' fetchUrl={requests.fatchTopRated}></Row>
    <Row title='Action Movies' id='AM' fetchUrl={requests.fatchActionMovies}></Row>
    <Row title='Comedy Movies' id='CN' fetchUrl={requests.fatchComedyMovies}></Row> */}
  </Contaner> 
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
  padding: 0 calc(3.5vw + 5px);

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