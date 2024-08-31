import React, { useState, useEffect } from 'react';

import axios from 'axios';

function StudentProfile() {
	
	
		const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      const formData = new FormData();
      formData.append('Sid', localStorage.getItem('Sid'));
      formData.append('Department', localStorage.getItem('Department'));
	  formData.append('Year', localStorage.getItem('Year'));
	  
	   /*
	  const formData = {
		  Department: localStorage.getItem('Department'),
		  Year: localStorage.getItem('Year'),
		};
		*/
	
	  //alert(localStorage.getItem('Year'));
	  
      const response = await axios.post(localStorage.getItem('Serverip')+'/api/StudentProfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

	 
      setResponseData(<div dangerouslySetInnerHTML={{ __html: response.data }} />);
    } catch (error) {
		alert(error);
      console.error('Error:', error);
    }
  };
	
	  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount
  
 
  
 
  
 
  
  
  return (
  
        <div class="templatemo-content">

        <h1>My Profile</h1>
		<hr/>


<div id="container">
<div id="show" class="show">
<br/>
 <div class="table-responsive">
  { responseData }
  
 </div>


</div>
</div>
</div>

  );
}

export default StudentProfile;