import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import styled from 'styled-components'
import '../Pages/MainPage.css';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
const MainPage = () => {
  const movePage = useNavigate();
  const [program,setProgram] = useState([])
  useEffect(()=>{
    // console.log('movePage')
    fetchData();
    alert('작업중입니다. :)');
  },[])
  
  const fetchData = async() => {
    const apiUrl = 'date.json';
    const response = await axios.get(apiUrl);
    setProgram(response.data.tvingList);
      
    }
    useEffect(()=>{
      // program.filter(number => {
        // console.log(number.date)
        let pensByColors = program.sort((a,b) => {
        return  (b.date - a.date)
      });
      console.log('pensByColors',pensByColors);
    
    },[program])

   

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