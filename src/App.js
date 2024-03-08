import React, { useState } from 'react';
import './App.css';
import Calculator from './Pages/calculator';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import TodoList from './Pages/todo';
import Home from './Pages/home';
import Weather from './Pages/weather';


const App = () => {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
          <Route path= "/calculator" element={<Calculator />} />
          <Route path= "/todo" element={<TodoList />} />
          <Route path= "/" element={<Home />} />
          <Route path= "/weather" element={<Weather />} />

      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
