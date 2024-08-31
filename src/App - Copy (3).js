import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Switch, Route, Navigate,Link} from 'react-router-dom';

import Login from './Login'; // Your login component
import Account from './Account'; // Your account component

import Header from './Header';
import Menubar from './Menubar';
import Footer from './Footer';
import Content from './Content';



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user authentication

  const [selectedPage, setSelectedPage] = useState('Student');

  const changePage = (pageName) => {
    setSelectedPage(pageName);
  };
  
  return (
  <>
  <BrowserRouter>
  <Routes>
      <>
    </>
	<div className="App">
      <Header />
      {isAuthenticated ? (
        <div className="template-page-wrapper">
          <Menubar changePage={changePage} />
          <div className="templatemo-content-wrapper">
            <Menubar changePage={changePage} />
	   <div class="templatemo-content-wrapper">
      <Content selectedPage={selectedPage} />
	  </div>
          </div>
          <Footer />
        </div>
      ) : (
        // Show a login page here if the user is not authenticated
        // For example, you can render a Login component
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  </Routes>
  </BrowserRouter>
  
  );
}

export default App;
