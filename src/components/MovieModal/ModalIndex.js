import React from 'react'
import "../MovieModal/Modal.css"

const ModalIndex = ({setModalOpen,backdrop_path,id,overview,name,title,release_date,vote_average,first_air_date}) => {
   console.log(overview)
  return (
    <div className='presentation' role='presentation'>
        <div className='wrapper-modal'>
            <div  className='modal'>
            <span onClick={()=>{
                setModalOpen(false)
            }} className='modal-close'>X</span>
         <img alt='modal-img' src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} className='modal__poster_img'></img>
         <div className='modal__content'>
            <p className='modal__details'>
                <span className='modal__user_perc'>100% for you</span>{" "}
                {release_date ? release_date : first_air_date}
            </p>
            <h2 className='modal__title'>{title ? title : name}</h2>
            <p className='modal__overview'>평점 : {vote_average}</p>
            <p className='modal__overview'>{overview}</p>
            </div>
         </div>
        </div>
    </div>
  )
}

export default ModalIndex