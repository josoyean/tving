import React from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"; // basic

import "../Pages/LoginPage.css";
const LoginPage = () => {
const swiperImg = (swiperNum) =>{
  const imgNum = []
  for (let index = 0; index < 11; index++) {
    let num = index % 5;
    imgNum.push( <SwiperSlide key={`${swiperNum}${num}`}> <img src={process.env.PUBLIC_URL+`/images/${swiperNum}${num}.webp`}  alt='' /></SwiperSlide>)
    
  }
  return imgNum 
}


  return (
    <div className='login-wrap'>
    <section className='loginContaner' id='section-0'>
        <div className='center'>
            <div className='login-title'>
                <p className='message-1'>티빙 오리지널 콘텐츠,</p>
                <p className='message-2'>방송, 영화, 해외시리즈까지!</p>
                <p className='message-3'>재미를 플레이해보세요.</p>
                <p className='message-4'>간편하게 가입하고, 원하실 때 해지할 수 있어요.</p>
           <button type='button'> <i className='play-icon'></i>지금 바로, 티빙을 플레이 하세요!</button>
            </div>
        </div>
    </section>
    <section id='section-1'> 
    <div className='center'>
        <div className='section-1-wrap'>
          <Message1>티빙에만 있는 재미</Message1>
          <Message2>오리지널 콘텐츠를 만나보세요!</Message2>
          <Message3>차별화된 웰메이드 오리지널 콘텐츠</Message3>
  <div className='section-1-image'>
      <img src={process.env.PUBLIC_URL+'/images/F_webp,1280.webp'}  alt='' />
      <img src={process.env.PUBLIC_URL+'/images/F_webp,12801.webp'}  alt='' />
      <img src={process.env.PUBLIC_URL+'/images/F_webp,12802.webp'}  alt='' />
  </div>
        </div>
        </div>
    </section>
    <section id='section--2'>
    <div className='center'>
    <div className='section-2-wrap'>
    <Message1>내가 찾던 재미</Message1>
                <Message2>보고 싶은 콘텐츠를 발견하세요!</Message2>
                <Message3>차별화된 웰메이드 오리지널 콘텐츠</Message3>          
    </div>
    <div className='swiper'>
    <Swiper
      loop={true}
      modules={[Navigation, Pagination,Autoplay]}
      autoplay={{ delay: 3000, speed: 5000 , disableOnInteraction:false}}
      spaceBetween={10}
      slidesPerView={7}
      slidesPerGroup={1}
        className="mySwiper"
      >
       {
     swiperImg(0)
       }
      </Swiper>
 

  <Swiper  style={{'paddingLeft':'80px','marginTop':'20px'}}
      loop={true}
      modules={[Navigation, Pagination,Autoplay]}
      autoplay={{ delay: 3000, speed: 5000 , disableOnInteraction:false}}
      spaceBetween={10}
      slidesPerView={7}
      slidesPerGroup={1}
        className="mySwiper"
      >
      {
         swiperImg(1)
      }
      </Swiper>
    </div>
    </div>
    </section>

    <section id='section--3'>
      
    </section>
    </div>
  )
}

export default LoginPage

 const Message1 = styled.nav`
  text-align: center;
    color: #fff;
    margin: 10px 0;
    font-size: 2.833rem;
    font-weight: bold;
 `
  const Message2 = styled.nav`
  text-align: center;
    color: #fff;
    margin: 10px 0;
    font-size: 1.667rem;
    font-weight: bold;
 `
  const Message3 = styled.nav`
  text-align: center;
    margin: 10px 0;
    font-weight: bold;
    font-size: 1.167rem;
    color: #a3a3a3;
 `