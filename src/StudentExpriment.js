import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

function StudentExpriment(props) {
	
	
		const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      const formData = new FormData();
      formData.append('ID', localStorage.getItem('Sid'));
      formData.append('Department', localStorage.getItem('Department'));
	  formData.append('Year', localStorage.getItem('Year'));
	  
	  /*
	  const formData = {
		  Department: localStorage.getItem('Department'),
		  Year: localStorage.getItem('Year'),
		};
		*/
	
	  //alert(localStorage.getItem('Year'));
	  
      const response = await axios.post(localStorage.getItem('Serverip')+'/api/StudentSubjectshow', formData, {
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
  
 
  
 
  
 
   if (window) {
	  window.reactFunction = async (id) => {
	 
		try {
 			setResponseData(<div />);
 
				 try {
					  const formData = new FormData();
					  formData.append('ID', localStorage.getItem('Sid'));
					  formData.append('Department', localStorage.getItem('Department'));
					  formData.append('Year', localStorage.getItem('Year'));
					  formData.append('Subject', id);
					  
					  const response = await axios.post(localStorage.getItem('Serverip')+'/api/StudentExprimentListshow', formData, {
						headers: {
						  'Content-Type': 'multipart/form-data',
						},
					  });

					  setResponseData(<div dangerouslySetInnerHTML={{ __html: response.data }} />);
					} catch (error) {
						alert(error);
					  console.error('Error:', error);
					}
		} 
		catch (error) {
		  console.error('Error:', error);
		}
		  
	  };
	  
	  
	  window.reactFunctionExp = async (id) => {
	 
		try {
 			setResponseData(<div />);
 
				 try {
					  const formData = new FormData();
					  formData.append('ID', localStorage.getItem('Sid'));
					  formData.append('Department', localStorage.getItem('Department'));
					  formData.append('Year', localStorage.getItem('Year'));
					  formData.append('Experiment', id);
					  
					  const response = await axios.post('http://localhost:3001/api/StudentExprimentshow', formData, {
						headers: {
						  'Content-Type': 'multipart/form-data',
						},
					  });

					  setResponseData(<div dangerouslySetInnerHTML={{ __html: response.data }} />);
					} catch (error) {
						alert(error);
					  console.error('Error:', error);
					}
		} 
		catch (error) {
		  console.error('Error:', error);
		}
		  
	  };
	  
   }
 
  
  
  return (
  
        <div class="templatemo-content">
 

 
<div >
<div id="show" class="show">
<br/>
 <div>
  { responseData }
  
 </div>


</div>
</div>
</div>

  );
}

export default StudentExpriment;