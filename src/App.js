import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import KakoRedirectPage from "./Pages/KakoRedirectPage";
import Login from "./Pages/Login";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import PlayerPage from "./Pages/PlayerPage";
import ProgramInfor from "./Pages/ProgramInfor";
import SearchPage from "./Pages/SearchPage";
import JoinPage from "./Pages/joinPage";
function App() {
  console.log("oauth/kakao/callback", window.navigator.userAgent);
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/join" element={<JoinPage />}></Route>
          <Route path="/oauth/kakao/callback" element={<KakoRedirectPage />} />
          <Route path="/program" element={<ProgramInfor />}></Route>
          <Route path="/player" element={<PlayerPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
