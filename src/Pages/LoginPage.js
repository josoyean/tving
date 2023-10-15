import React from 'react';
import { Link } from "react-router-dom";
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
    imgNum.push( <SwiperSlide key={index}> <img src={process.env.PUBLIC_URL+`/images/${swiperNum}${num}.webp`}  key={index} alt='' /></SwiperSlide>)
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
                <Link to="/main">  <button type='button' className='tving-button'> <i className='play-icon'></i>지금 바로, 티빙을 플레이 하세요!</button></Link>
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
      <div className='video-wrap'>
      <Iframe 
      src={`https://www.youtube.com/embed/5NST_3F_jxM?autoplay=1&mute=1&loop=1`}
      width='100%' height='700' frameBorder='0' allow='autoplay'
      ></Iframe>
      </div>

      <div className='section-3-wrap'>
      <Message1>똑똑하게 보는 재미</Message1>
                <Message2>최신 방송을 가장 빠르고 간편하게 시청하세요!</Message2>
                <Message3>실시간TV,퀵VOD,타임머신 기능으로 기다리지말고 편리하게 시청</Message3>    
<div className='section-3-video'>
<Iframe 
      src={`https://image.tving.com/ntgs/operation/onboard/2023/04/03/1680488907_1.mp4?autoplay=1&mute=1&loop=1`}
      width='100%' height='600' frameBorder='0'
      ></Iframe>
<img src="https://image.tving.com/ntgs/operation/onboard/2023/06/01/1685582727_1.png" className="section-4-video css-f8xuja ea0b28c38 show" alt="똑똑하게 보는 재미 소개 영상"></img>
</div>
        </div>
    </section>

    <section id='section--4'>
    <div className='center'>
    <div className='section-4-wrap'>
    <Message1>함께 즐기는 재미</Message1>
                <Message2>다양한 기기로 즐겨보세요!</Message2>
                <Message3>스마트폰,태블릿,PC,TV,크롬캐스트에서 시청</Message3>          
                <Message3>최대4명의 지인들과 함께 구독</Message3>          
    </div>
    <div className='section-4-video'>
    <Iframe 
      src={`https://image.tving.com/ntgs/operation/onboard/2023/04/03/1680488945_1.mp4?autoplay=1&mute=1&loop=1`}
      width='100%' height='400' frameBorder='0' 
      ></Iframe>
    </div>
      </div>
    </section>
    <section id='section--5'>
    <div className='center'>
      <div className='section-5-wrap'>
<img src={process.env.PUBLIC_URL+`/images/no-1-k-new-tving.svg`} alt='section-5-img'></img>
<Message1>지금 시작해보세요</Message1>
<Link to="/main"><button type='button' className='tving-button'> <i className='play-icon'></i>지금 바로, 티빙을 플레이 하세요!</button></Link>
      </div>
      </div>
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
 const Iframe = styled.iframe`
 width: 100%;
 height: 100%;
 z-index: -1;
 opacity: 0.65;
 border: none;
 
 &::after{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
 }
 `