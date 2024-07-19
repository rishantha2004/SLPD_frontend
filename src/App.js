import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Admin from './components/AdminBoard/Admin';

const App = () => {


  return (
    <Router>
      <Routes>
     
        <Route path="/" exact element={<Login />} />
    
        <Route path="/admin/*" exact element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
