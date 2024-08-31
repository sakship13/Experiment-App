import React, { useState } from 'react';

import axios from 'axios';

function StudentLogin({ setIsAuthenticated }) {
	
	const [formData, setFormData] = useState({
    UName: '',
    Upass: '',
    });
  
  //const [formData, setParameter] = useState(''); // State to hold the parameter value
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
		  		  
      const response = await axios.post(localStorage.getItem('Serverip')+'/api/LoginStudent', formData);
	  console.log('Login response:', response.data.message);
	  
	  if (response.data.message=='Login successful') {
		  alert('Login Successfully..!');
		  const { Sid,Name,Department,Year } = response.data;
		  localStorage.setItem('Sid', Sid);
		  localStorage.setItem('Name', Name);
		  localStorage.setItem('Department', Department);
		  localStorage.setItem('Year', Year);
		  
          setIsAuthenticated(true);
      }
	  
      // You can add code here to handle success or show a success message to the user.
    } catch (error) {
		  alert(error);
      console.error('Error submitting form data:', error);
      // You can add code here to handle errors or show an error message to the user.
    }
  }
  
 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  
  
  return (
  
        <div id="main-wrapper">
    <div class="template-page-wrapper">
      <form class="form-horizontal templatemo-signin-form" onSubmit={handleSubmit}>

	
	<div class="form-group col-md-12" style={{ textAlign: 'center' }}>
					<h1>Student SignIn</h1>
			</div>
			
			<div class="form-group col-md-12">
				<img src="bg.png" width="100%" />
			</div>
			
        <div class="form-group">
          <div class="col-md-12">
            <label for="username" class="col-sm-2 control-label">Email</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="UName" placeholder="Email" onChange={handleInputChange} value={formData.UName}/>
            </div>
          </div>              
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <label for="password" class="col-sm-2 control-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" name="Upass" placeholder="Password" onChange={handleInputChange} value={formData.Upass}/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <div class="col-sm-offset-2 col-sm-10">
 				<div className="button"><button type="submit" class="form-control" name="signin">Sign in</button></div>

            </div>
          </div>
        </div>
		
			<div class="form-group col-md-12" style={{ textAlign: 'center' }}>
				To Sign Up <a href="/StudentSignup">[ Click Hear ]</a>
			</div>
      </form>
    </div>
  </div>

  );
}

export default StudentLogin;