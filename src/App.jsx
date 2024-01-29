import React from 'react';
import './App.css';
import Product from './Product';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Accounts/Login';
import Cartlist from './Components/Product/Cartlist';
import Signup from './Components/Accounts/Signup';
import PrivateRoute from './PrivetRoutes';

function App() {
  return (
    <>
     
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path='/cartlist' element={<PrivateRoute><Cartlist/></PrivateRoute> }/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
