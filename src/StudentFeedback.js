import React, { useState, useEffect } from 'react';

import axios from 'axios';

function StudentFeedback() {
	
 
 /*
   const fetchData = async () => {
    try {
      const formData = new FormData();
      //formData.append('ID', localStorage.getItem('Sid'));
      formData.append('Department', localStorage.getItem('Department'));
	  formData.append('Year', localStorage.getItem('Year'));
 
     } catch (error) {
		alert(error);
      console.error('Error:', error);
    }
  };
	
	  useEffect(() => {
    fetchData();
	}, []); // Empty dependency array ensures this runs only once on mount
  
  */
  
  const [formData, setFormData] = useState({
	ID:'',
    Tital: '',
    Feedback: '',
    });
	
	const handleSubmit = async (e) => {
    e.preventDefault();


    try {
	
		var all=0;
		//alert(formData.SName);

		
		if (formData.Tital!='') {
 
		} else {
		  alert('Enter Tital..');
		  all=1;
		}

		if (formData.Feedback!='') {
 
		} else {
		  alert('Enter Feedback..');
		  all=1;
		}
		
	if(all==0)
		{
			
		/*
	  const formData1 = new FormData();
      formData1.append('ID', "1");
      formData1.append('Tital', "ok");
      formData1.append('Feedback', "ni");
	  
	  alert(localStorage.getItem('Sid'));
	  
	  const response = await axios.post('http://localhost:3001/api/Feedbackinsert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
	  */
	  
      const response = await axios.post(localStorage.getItem('Serverip')+'/api/Feedbackinsert', formData);
	  

	  
      console.log('Form data submitted successfully:', response.data);
	  alert('Feedback Post Successfully..!');
		}
      // You can add code here to handle success or show a success message to the user.
    } catch (error) {
		  
      console.error('Error submitting form data:', error);
      // You can add code here to handle errors or show an error message to the user.
    }
  }
  
 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  
  
  // Set the value from localStorage when the component mounts
  useEffect(() => {
    const storedID = localStorage.getItem('Sid');
    if (storedID) {
      setFormData({ ...formData, ID: storedID });
    }
  }, []);
  
  return (
  
        <div class="templatemo-content">

          <h1>All Students Details</h1>
		<hr/>


<div id="container">
<div id="show" class="show">
<div id="cp_contact_form">
<form onSubmit={handleSubmit}>

   <input type="hidden" name="ID" value="1" class="form-control" id="firstName" Placeholder="ID" onChange={handleInputChange} value={formData.ID}/>
   
                <div class="row">
                  <div class="col-md-6 margin-bottom-15">
                    <label for="firstName" class="control-label">Subject</label>
                    <input type="text" name="Tital" class="form-control" id="firstName" Placeholder="Subject" onChange={handleInputChange} value={formData.Tital}/>
					 
                  </div>
                  <div class="col-md-6 margin-bottom-15">
                    <label for="lastName" class="control-label">Feedback</label>
    
					
					<textarea name="Feedback" class="form-control" id="firstName" onChange={handleInputChange} value={formData.Feedback}></textarea>
										
                  </div>
                </div>

 
 

              <div class="row templatemo-form-buttons">
                <div class="col-md-12">
					<div className="button"><button type="submit" class="form-control">Submit</button></div>
                </div>
              </div>

</form>
</div>


 
 

</div>
</div>
</div>

  );
}

export default StudentFeedback;