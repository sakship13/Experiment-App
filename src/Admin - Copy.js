import React from 'react';

function Admin() {
  return (
  
        <div class="templatemo-content">

          <h1>All Staf/Members Details</h1>
		 <hr/>


<div id="container">
<div id="show" class="show">
<div id="cp_contact_form">
<form name="form" id="form">

                <div class="row">
                  <div class="col-md-6 margin-bottom-15">
                    <label for="firstName" class="control-label">User Name</label>
                    <input type="text" name="content" class="form-control" id="firstName" Placeholder="First and Last Name"/>           
                  </div>
                  <div class="col-md-6 margin-bottom-15">
                    <label for="lastName" class="control-label">User Email</label>
                    <input type="text" name="content1"  class="form-control" id="lastName" Placeholder="Email"/>        
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 margin-bottom-15">
                    <label for="firstName" class="control-label">User Password</label>
                    <input type="Password" name="content2" class="form-control" id="firstName" Placeholder="Password"/>           
                  </div>
                  <div class="col-md-6 margin-bottom-15">
                    <label for="lastName" class="control-label">Job Location</label>
                    <input type="text" name="content3"  class="form-control" id="lastName" Placeholder="Job Location"/>  
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 margin-bottom-15">
                    <label for="firstName" class="control-label">User Type</label>
                    <select name="content4" class="form-control" id="firstName">
					<option value="Admin">Admin</option>
					<option value="Sevika">Sevika</option>
					<option value="Madatnis">Madatnis</option>
					</select>
                  </div>
                </div>

 

              <div class="row templatemo-form-buttons">
                <div class="col-md-12">
                  <button type="button" name="submit" class="submit_button">Save</button>   
                </div>
              </div>

</form>
</div>


<div class="table-responsive">
<h4 class="margin-bottom-15">All Users Table</h4>
<table class="table table-striped table-hover table-bordered">
<thead><tr>
<td><b>Admin ID</b></td>
<td><b>Admin Name</b></td>
<td><b>Admin Email</b></td>
<td><b>Admin Type</b></td>
<td><b>Location</b></td>
<td></td>
</tr></thead>
<tbody>

<tr>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td><a href="#" class="ABCD" id=" ">[ X ]</a>
<a href="#" class="Edit" id=" ">[ Edit ]</a>
</td>
</tr>
 
</tbody>
</table> 
</div>

</div>
</div>
</div>
  );
}

export default Admin;