import React from 'react';

import Home from './Home';
import Student from './Student';
import Admin from './Admin';
import Experiment from './Experiment';
import Category from './Category';
import Feedback from './Feedback';
import Attendance from './Attendance';

//import StudentList from './StudentList';

function Content(props) {
  const pages = {
    'Home': <Home />,
    'ALL Staf-Members': <Admin />,
    'Student List': <Student />,
    'Experiment Subject/Category': <Category />,
    'Experiments': <Experiment />,
	'Feedback': <Feedback />,
	'Attendance': <Attendance />,
	'Sign Out': <Home />,
  };

  return <div className="content-area">{pages[props.selectedPage]}</div>;
}

export default Content;