import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Category() {
	
		const [responseData, setResponseData] = useState(null);
	const [responseDataDonar, setresponseDataDonar] = useState(null);

  const fetchData = async () => {
    try {
      const formData = new FormData();
      formData.append('ID', '0');
      //formData.append('Name', 'A');
	  //formData.append('uid', localStorage.getItem('sessionToken'));

      const response = await axios.post('http://localhost:3001/api/Subjectshow', formData, {
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
  
	const [formData, setFormData] = useState({
    SName: '',
    Department: '',
    Year: '',
    });
  
  //const [formData, setParameter] = useState(''); // State to hold the parameter value
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
		var all=0;
		//alert(formData.SName);
		if (/^[A-Za-z]+$/.test(formData.SName) && formData.SName1!='') {
 
		} else {
		  alert('Subject Name Only letters (A-Z,a-z) are allowed.');
		  all=1;
		}
		
		if (formData.Department!='') {
 
		} else {
		  alert('Select Department..');
		  all=1;
		}

		if (formData.Year!='') {
 
		} else {
		  alert('Select Year..');
		  all=1;
		}
		
		if(all==0)
		{
		  const response = await axios.post('http://localhost:3001/api/Subjectinsert',  formData);
		  console.log('Form data submitted successfully:', response.data);
		  alert('Contact Submitted Successfully..!');
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
  
  
  return (
  
        <div class="templatemo-content">

        <h1>All Experiment Subject List</h1>
		<hr/>


<div id="container">
<div id="show" class="show">
<div id="cp_contact_form">
<form onSubmit={handleSubmit}>


			<div class="row">
                  <div class="col-md-6 margin-bottom-15">
                    <label for="firstName" class="control-label">Department</label>
                    <select name="Department" class="form-control" id="firstName" onChange={handleInputChange} value={formData.Department}>
					<option value=""></option>
					<option value="CSE">CSE</option>
					<option value="Civil">Civil</option>
					<option value="Mech">Mech</option>
					</select>
                  </div>
				  
				  
				  <div class="col-md-6 margin-bottom-15">
                    <label for="firstName" class="control-label">Year</label>
                    <select name="Year" class="form-control" id="firstName" onChange={handleInputChange} value={formData.Year}>
					<option value=""></option>
					<option value="FE">FE</option>
					<option value="SE">SE</option>
					<option value="TE">TE</option>
					<option value="BE">BE</option>
					</select>
                  </div>
				  
                </div>

                				<div class="row">
                  <div class="col-md-12 margin-bottom-15">
                    <label for="firstName" class="control-label">Subject</label>
                    <input type="text" name="SName" class="form-control" id="firstName" onChange={handleInputChange} value={formData.SName}/>

                  </div>

                </div>
 


              <div class="row templatemo-form-buttons">
                <div class="col-md-12">
 
				<div className="button"><button type="submit" class="form-control">Submit</button></div>
				  
                </div>
              </div>

</form>
</div>


<hr/>
<br/>
 <div class="table-responsive">
 <h4 class="margin-bottom-15">Subject Table</h4>
  { responseData }
  
 </div>


</div>
</div>
</div>

  );
}

export default Category;