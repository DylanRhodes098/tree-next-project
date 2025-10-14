import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import Layout from './components/layout';
import UserProfile from "./pages/userProfile";

export default function App() {
return (
    <>
  
    <Routes>
      <Route path="/register" element={<Register/>} /> 
      <Route path="/login" element={<Login/>} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Route>
      </Routes>
    </>
  );
};