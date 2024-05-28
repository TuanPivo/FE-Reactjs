import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/user/Login';
import reportWebVitals from './reportWebVitals';
import Home from './components/user/home/Home'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* Route cho trang đăng nhập */}
      <Route path="/login" element={<Login />} />
      {/* Route cho ứng dụng chính */}
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
