import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import KakoRedirectPage from "./Pages/KakoRedirectPage";
import Login from "./Pages/Login";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import ProgramInfor from "./Pages/ProgramInfor";
import SearchPage from "./Pages/SearchPage";
import JoinPage from "./Pages/joinPage";
function App() {
  console.log("/oauth/callback/kakao");
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/join" element={<JoinPage />}></Route>
          <Route path="/oauth/callback/kakao" element={<KakoRedirectPage />} />
          <Route path="/program" element={<ProgramInfor />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
