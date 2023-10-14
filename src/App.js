import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./Pages/DetailPage";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import SearchPage from "./Pages/SearchPage";
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
      <Route path="/" element={<Layout></Layout>}>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="main" element={<MainPage></MainPage>}></Route>
        <Route path=":movieId" element={<DetailPage></DetailPage>}></Route>
        <Route path="search" element={<SearchPage></SearchPage>}></Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;



