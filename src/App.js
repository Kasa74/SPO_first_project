// import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import { observer } from "mobx-react-lite";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Basket from "./pages/Basket/Basket";
import Menswear from "./pages/Menswear/Menswear";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

const App = observer(() => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/Menswear" element={<Menswear />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  );
});

export default App;
