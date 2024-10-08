import React, { useState } from 'react';

import Header from './Header';
import Menubar from './Menubar';
import Footer from './Footer';
import Content from './Content';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
	
  const [selectedPage, setSelectedPage] = useState('Student');

  const changePage = (pageName) => {
    setSelectedPage(pageName);
  };
  
  return (
    <div className="App">
      <Header />
	   <div class="template-page-wrapper">
	  <Menubar changePage={changePage} />
	   <div class="templatemo-content-wrapper">
      <Content selectedPage={selectedPage} />
	  </div>
	  <Footer />
	  </div>
    </div>
  );
}

export default App;
