import React from 'react';

import Home from './Home';
import StudentProfile from './StudentProfile';
import StudentExpriment from './StudentExpriment';
import StudentExprimentList from './StudentExprimentList';
import StudentFeedback from './StudentFeedback';


function StudentContent(props) {
  const pages = {
    'Home': <Home />,
    'Expriment': <StudentExpriment />,
	'ExprimentList': <StudentExprimentList />,
    'Feedback': <StudentFeedback />,
	'My Profile': <StudentProfile />,
  };


  return <div className="content-area">{pages[props.selectedPage]}</div>;
}

export default StudentContent;