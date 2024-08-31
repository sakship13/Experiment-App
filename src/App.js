import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Switch, Route, Navigate,Link} from 'react-router-dom';

import MainAdmin from './MainAdmin';
import MainStudent from './MainStudent';
import StudentSignup from './StudentSignup';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user authentication

  const [selectedPage, setSelectedPage] = useState('Student');

  const changePage = (pageName) => {
    setSelectedPage(pageName);
  };
  
  return (
  <>
  <Router>
  <Routes>
      <>
    </>
	<Route path="/MainAdmin" element ={<MainAdmin/>}></Route>
	<Route path="/MainStudent" element ={<MainStudent/>}></Route>
	<Route path="/StudentSignup" element ={<StudentSignup/>}></Route>

	
  </Routes>
  </Router>
   </>
  );
}

export default App;
