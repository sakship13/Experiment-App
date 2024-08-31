import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Switch, Route, Navigate,Link} from 'react-router-dom';

import StudentLogin from './StudentLogin.js'; // Your login component
import Account from './Account'; // Your account component

import Header from './Header';
import StudentMenubar from './StudentMenubar';
import Footer from './Footer';
import StudentContent from './StudentContent';
import Home from './Home'; 


function MainStudent() {

  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user authentication

  const [selectedPage, setSelectedPage] = useState('Home');

  localStorage.setItem('Serverip', 'http://192.168.158.27:3001');

  const changePage = (pageName) => {
    setSelectedPage(pageName);
  };
  
  return (
 
	<div className="App">
      <Header />
      {isAuthenticated ? (
        <div className="template-page-wrapper">
           <div className="templatemo-content-wrapper">
          <StudentMenubar changePage={changePage} />
	   <div class="templatemo-content-wrapper">
      <StudentContent selectedPage={selectedPage} />
	  </div>
          </div>
          <Footer />
        </div>
      ) : (
        // Show a login page here if the user is not authenticated
        // For example, you can render a Login component
        <StudentLogin setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
 
  
  );
}

export default MainStudent;
