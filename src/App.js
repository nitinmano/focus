import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SignIn} from './pages/signin';
import {SignUp} from './pages/register';
import { Navbar } from './pages/Navbar';
import Dashboard  from './pages/dashboard'; 
import './App.css';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>  
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/register" element={<SignUp/>}/>
        </Routes>
    </Router>
  );
};

export default App;
