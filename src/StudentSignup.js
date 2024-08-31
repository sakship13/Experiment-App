import React, { useState } from 'react';

import axios from 'axios';

import Header from './Header';
import Menubar from './Menubar';
import Footer from './Footer';
import Content from './Content';



function StudentSignup() {

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Pass: '',
	CPass: '',
    PRN: '',
    Department: '',
	Year: '',
    });
	
	const handleSubmit = async (e) => {
    e.preventDefault();

    try {
	
		var all=0;
		//alert(formData.SName);
		if (/^[A-Za-z ]+$/.test(formData.Name) && formData.Name!='') {
 
		} else {
		  alert('Invalid name format. Use "First Last"');
		  all=1;
		}
		
		if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.Email) && formData.Email!='') {
 
		} else {
		  alert('Invalid email address.');
		  all=1;
		}

		if (/^\d{10}$/.test(formData.PRN) && formData.PRN!='') {
 
		} else {
		  alert('PRN Enter a 10-digit numbers only..');
		  all=1;
		}

		if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(formData.Pass) && formData.Pass!='') {

		} else {
		  alert('Password must contain at least one uppercase letter, one lowercase letter, one special character, one digit, and be at least 8 characters in length.');
		  all=1;
		}

		if (formData.Pass==formData.CPass) {
 
		} else {
		  alert('Password Not Match..');
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
      const response = await axios.post(localStorage.getItem('Serverip')+'/api/Studentinsert',  formData);
      console.log('Form data submitted successfully:', response.data);
	  alert('User Register Successfully..!');
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
 
	<div className="App">
      <Header />

		<div id="main-wrapper">
			<div class="template-page-wrapper">
			  <form class="form-horizontal templatemo-signin-form" onSubmit={handleSubmit}>

			
			<div class="form-group col-md-12" style={{ textAlign: 'center' }}>
							<h1>Student SignUp</h1>
					</div>
					
					
				<div class="form-group">
				  <div class="col-md-12">
	                    <label for="firstName" class="control-label">Student Name</label>
                    <input type="text" name="Name" class="form-control" id="firstName" Placeholder="First and Last Name" onChange={handleInputChange} value={formData.Name}/>
				  </div>              
				</div>
				
				<div class="form-group">
				  <div class="col-md-12">
	                    <label for="lastName" class="control-label">Student Email</label>
                    <input type="text" name="Email"  class="form-control" id="lastName" Placeholder="Email" onChange={handleInputChange} value={formData.Email}/>
				  </div>
				</div>

				<div class="form-group">
				  <div class="col-md-12">
                    <label for="firstName" class="control-label">Password</label>
                    <input type="Password" name="Pass" class="form-control" id="firstName" Placeholder="Password" onChange={handleInputChange} value={formData.Pass}/>  
				  </div>
				</div>

				<div class="form-group">
				  <div class="col-md-12">
                    <label for="firstName" class="control-label">Confirm Password</label>
                    <input type="Password" name="CPass" class="form-control" id="firstName" Placeholder="Password" onChange={handleInputChange} value={formData.CPass}/>  
				  </div>
				</div>
				

				<div class="form-group">
				  <div class="col-md-12">
                    <label for="lastName" class="control-label">PRN</label>
                    <input type="text" name="PRN"  class="form-control" id="lastName" Placeholder="PRN" onChange={handleInputChange} value={formData.PRN}/>  
				  </div>
				</div>


				<div class="form-group">
				  <div class="col-md-12">
                     <label for="firstName" class="control-label">Department</label>
                    <select name="Department" class="form-control" id="firstName" onChange={handleInputChange} value={formData.Department}>
					<option value=""></option>
					<option value="CSE">CSE</option>
					<option value="Civil">Civil</option>
					<option value="Mech">Mech</option>
					</select>
				  </div>
				</div>				

				<div class="form-group">
				  <div class="col-md-12">
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

				
				
				<div class="form-group">
				  <div class="col-md-12">
					<div class="col-sm-offset-2 col-sm-10">
						<div className="button"><button type="submit" class="form-control" name="signin">SignUp</button></div>

					</div>
				  </div>
				</div>
				
					<div class="form-group col-md-12" style={{ textAlign: 'center' }}>
						To SignIn <a href="/MainStudent">[ Click Hear ]</a>
					</div>
			  </form>
			</div>
		  </div>


    </div>
 
  
  );
}

export default StudentSignup;
