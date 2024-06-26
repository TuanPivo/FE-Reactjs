import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './components/user/Login';
import Home from './components/user/home/Home';
import PrivateRoute from './components/user/home/PrivateRoute';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token')
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<Navigate to={isLoggedIn ? '/' : '/login'} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
