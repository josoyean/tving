import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import "../components/Row.css";
import ModalIndex from './MovieModal/ModalIndex';

const Row = ({title,id,program}) => {
  const [topProgram,setTopProgram] = useState([]);
  const [modalOpen,setModalOpen] = useState(false);
  const [movieSelected,setMovieSelected] = useState({});

  const fetchMovieData= useCallback(()=>{

       let programViews = program.sort((a,b) => {
     return  (b.views - a.views)
    });
    setTopProgram(programViews)

    // console.log('program',program);
    // setTopProgram(topProgram);
  },[program])
  
  useEffect(()=>{
    fetchMovieData();
  },[fetchMovieData])

  const hendleClick = (movie) =>{
    setModalOpen(true);
    // setMovieSelected(movie);
  
  }
  return (
    <div>
      <Title>{title}</Title>
  
      <div className='slider'>
        <div className='slider__arrow-left' onClick={()=>{
              document.getElementById(id).scrollLeft -= window.innerWidth + 80;
          }}>
          <span className='arrow'>{'<'}</span>
        </div>
        <div id={id} className='row__posters'>
          
         {
       
         program.map((topProgram,numProgram) => (
          // <div>
           
            // {
              numProgram+1 <=10 && <div> <TopProgramNum>{numProgram+1}</TopProgramNum> <img className='row__poster' key={topProgram.id} src={topProgram.thumbnail} alt={topProgram.title}></img> </div>
            // }
          // </div>
        //   <img key={topProgram.id} onClick={()=>{
           
        //   }} className='row__poster' src={topProgram.thumbnail} alt={topProgram.title}></img>
           ))
           }
        </div>
        <div className='slider__arrow-right' onClick={()=>{
              document.getElementById(id).scrollLeft += window.innerWidth + 80;
          }}>
          <span className='arrow'>{'>'}</span>
        </div>
      </div>
      {modalOpen &&  <ModalIndex {...movieSelected} setModalOpen={setModalOpen}></ModalIndex>}
    </div>
  )
}

export default Row

const Title = styled.h2`
color: #fff;
`
const TopProgramNum = styled.span`
color: #fff;
font-size: 65px;
font-weight: bolder;
position: absolute;
left: 30px;
bottom: 0;
z-index: 99099;
`