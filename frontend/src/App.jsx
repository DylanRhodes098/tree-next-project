import React from 'react';
import Register from './pages/register';
import {Routes, Route} from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';

export default function App() {
return (
    <>

    <Routes>
      <Route path="/" element={<Register/>} /> 
      <Route path="/login" element={<Login/>} /> 
      <Route path="/home" element={<Home/>} /> 
    </Routes>

    </>
  );
};