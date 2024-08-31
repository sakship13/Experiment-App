import React, { useState } from 'react';

import Login from './Login'; // Your login component
import Account from './Account'; // Your account component


import { BrowserRouter as Router,Routes, Switch, Route, Navigate } from 'react-router-dom';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user authentication

  const [selectedPage, setSelectedPage] = useState('Student');

  const changePage = (pageName) => {
    setSelectedPage(pageName);
  };
  
  return (
 <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/account" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/account" element={isAuthenticated ? <Account /> : <Navigate to="/login" />} />
        <Route index element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
