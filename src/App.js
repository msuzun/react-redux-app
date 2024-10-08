import React from 'react';
import { BrowserRouter  as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import './App.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'

function App() {
  return (
   <>
    <Router>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </div>
    </Router>
    <ToastContainer position='top-center'/>


   </>
  );
}

export default App;
