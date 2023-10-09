import React, { useCallback, useEffect, useState } from 'react';
import axios from '../api/axios';
import "../components/Row.css";
import ModalIndex from './MovieModal/ModalIndex';

const Row = ({title,id,fetchUrl}) => {
  const [movies,setMovies] = useState([]);
  const [modalOpen,setModalOpen] = useState(false);
  const [movieSelected,setMovieSelected] = useState({});

  const fetchMovieData= useCallback(async()=>{
    const reponse = await axios.get(fetchUrl);

    setMovies(reponse.data.results)
},[fetchUrl])

  useEffect(()=>{
    fetchMovieData();
  },[fetchMovieData])

  const hendleClick = (movie) =>{
    setModalOpen(true);
    setMovieSelected(movie);
    console.log(movie)
  }
  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left' onClick={()=>{
              document.getElementById(id).scrollLeft -= window.innerWidth + 80;
          }}>
          <span className='arrow'>{'<'}</span>
        </div>
        <div id={id} className='row__posters'>
         { movies.map((movie) => (
          <img key={movie.id} onClick={()=>{
            hendleClick(movie)
          }} className='row__poster' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.name}></img>
           ))}
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