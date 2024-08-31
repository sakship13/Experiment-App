import React from 'react';

function StudentMenubar(props) {
  const pages = ['Home', 'Expriment', 'Feedback', 'My Profile'];

  return (
  
       <div class="navbar-collapse collapse templatemo-sidebar">
        <ul class="templatemo-sidebar-menu">
        {pages.map((page, index) => (
          <li><a key={index} onClick={() => props.changePage(page)}>
            {page}
          </a></li>
        ))}
		 <li><a href="/MainStudent">Sign Out</a></li>
      </ul>
    </div>
  );
}

export default StudentMenubar;