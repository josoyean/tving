import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./Pages/DetailPage";
import Login from "./Pages/Login";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import SearchPage from "./Pages/SearchPage";
import JoinPage from "./Pages/joinPage";
import Nav from "./components/Nav";
const Layout = ()=>{
  return(
    <div>
      <Nav>

      </Nav>
      <Outlet></Outlet>
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="tving/index" element={<LoginPage />}></Route>
        <Route path="tving/main" element={<MainPage />}></Route>
        <Route path="tving/login" element={<Login />}></Route>
        <Route path=":movieId" element={<DetailPage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
        <Route path="tving/join" element={<JoinPage />}></Route>
      {/* </Route> */}
    </Routes>
    </div>
  );
}

export default App;



