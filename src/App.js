import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import KakoRedirectPage from "./Pages/KakoRedirectPage";
import Login from "./Pages/Login";
// import LoginPage from "./Pages/LoginPage";
import IndexPage from "./Pages/IndexPage";
import MainPage from "./Pages/MainPage";
import PlayerPage from "./Pages/PlayerPage";
import ProgramInfor from "./Pages/ProgramInfor";
import JoinPage from "./Pages/joinPage";
function App() {
  console.log("oauth/kakao/callback", window.navigator.userAgent);
  // localStorage.setItem(
  //   "data",
  //   JSON.stringify({
  //     connected_at: "2024-03-12T04:56:13Z",
  //     id: 3385411931,
  //     kakao_account: {
  //       profile: {
  //         is_default_image: false,
  //         is_default_nickname: false,
  //         nickname: "조소연",
  //         profile_image_url:
  //           "http://k.kakaocdn.net/dn/iGBY5/btsHDckRS7I/SzvGkaPtNyM2n8WxseCLK0/img_640x640.jpg",
  //         thumbnail_image_url:
  //           "http://k.kakaocdn.net/dn/iGBY5/btsHDckRS7I/SzvGkaPtNyM2n8WxseCLK0/img_110x110.jpg",
  //       },
  //     },
  //   })
  // );
  return (
    <Routes>
      <Route path="/" element={<IndexPage />}></Route>
      <Route path="/main" element={<MainPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* <Route path="/search" element={<SearchPage />}></Route> */}
      <Route path="/join" element={<JoinPage />}></Route>
      <Route path="/oauth/kakao/callback" element={<KakoRedirectPage />} />
      <Route path="/program" element={<ProgramInfor />}></Route>
      <Route path="/player" element={<PlayerPage />}></Route>
    </Routes>
  );
}

export default App;
