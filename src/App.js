import React from 'react';
import { BrowserRouter  as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
   <>
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </div>
    </Router>
   </>
  );
}

export default App;