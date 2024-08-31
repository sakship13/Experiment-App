import React from 'react';

function Menubar(props) {
  const pages = ['Home', 'ALL Staf-Members', 'Student List', 'Experiment Subject/Category', 'Experiments','Attendance', 'Feedback'];

  return (
  
       <div class="navbar-collapse collapse templatemo-sidebar">
        <ul class="templatemo-sidebar-menu">
        {pages.map((page, index) => (
          <li><a key={index} onClick={() => props.changePage(page)}>
            {page}
          </a></li>
        ))}
		 <li><a href="http://localhost:3000/">Sign Out</a></li>
      </ul>
    </div>
  );
}

export default Menubar;