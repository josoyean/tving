import React from 'react'
import styled from 'styled-components'
// import styled from 'styled-components'
import requests from '../api/request'
import Banner from '../components/Banner'
import Category from '../components/Category'
import Nav from '../components/Nav'
import Row from '../components/Row'

const MainPage = () => {
  return (
    <Contaner>
    <Nav></Nav>
    <Banner></Banner>
    <Category></Category>
    <Row title='Trending Now' id='TN' fetchUrl={requests.fatchTrending}></Row>
    <Row title='Top Rated' id='TR' fetchUrl={requests.fatchTopRated}></Row>
    <Row title='Action Movies' id='AM' fetchUrl={requests.fatchActionMovies}></Row>
    <Row title='Comedy Movies' id='CN' fetchUrl={requests.fatchComedyMovies}></Row>
  </Contaner> 
  )
}

export default MainPage

const Contaner = styled.main`
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