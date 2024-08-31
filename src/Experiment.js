import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Experiment() {
	
	

	const [responseData, setResponseData] = useState(null);
	const [responseDataDonar, setresponseDataDonar] = useState(null);


  const fetchData = async () => {
    try {
      const formData = new FormData();
      formData.append('ID', '0');
      //formData.append('Name', 'A');
	  //formData.append('uid', localStorage.getItem('sessionToken'));

      const response = await axios.post('http://localhost:3001/api/Experimentshow', formData, {
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
  
	const [file, setFile] = useState(null);
  
    const [formData, setFormData] = useState({
    Subject: '',
    ExperimentTitle: '',
    ExperimentComponent: '',
    ExperimentAbstract: '',
    ExperimentDetail: '',
	ExperimentResult: '',
	ExperimentConclusion: '',
    });
  
  				
	
		const handleSubmit = async (e) => {
    e.preventDefault();

    try {
	
		var all=0;
		//alert(formData.SName);
		if (formData.Subject!='') {
 
		} else {
		  alert('Select Subject..');
		  all=1;
		}
		
		if (formData.ExperimentTitle!='') {
 
		} else {
		  alert('Enter Experiment Title..');
		  all=1;
		}

		if (formData.ExperimentComponent!='') {
 
		} else {
		  alert('Enter Experiment Component..');
		  all=1;
		}
		
		if (formData.ExperimentAbstract!='') {
 
		} else {
		  alert('Enter Experiment Abstract..');
		  all=1;
		}
		
		if (formData.ExperimentDetail!='') {
 
		} else {
		  alert('Enter Experiment Detail..');
		  all=1;
		}
		
		if (formData.ExperimentResult!='') {
 
		} else {
		  alert('Enter Experiment Result..');
		  all=1;
		}

		if (formData.ExperimentConclusion!='') {
 
		} else {
		  alert('Enter Experiment Conclusion..');
		  all=1;
		}
		
		
		
	if(all==0)
		{
			
	  const formData1 = new FormData();
	  formData1.append('file', file);
	  formData1.append('Subject', formData.Subject);
	  formData1.append('ExperimentTitle', formData.ExperimentTitle);
	  formData1.append('ExperimentComponent', formData.ExperimentComponent);
	  formData1.append('ExperimentAbstract', formData.ExperimentAbstract);
	  formData1.append('ExperimentDetail', formData.ExperimentDetail);
	  formData1.append('ExperimentResult', formData.ExperimentResult);
	  formData1.append('ExperimentConclusion', formData.ExperimentConclusion);
  
      //const response = await axios.post('http://localhost:3001/api/Experimentinsert',  formData1);
	  
	  const response = await axios.post('http://localhost:3001/api/Experimentinsert', formData1, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
	
      console.log('Form data submitted successfully:', response.data);
	  alert('Experiment Save Successfully..!');
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

const handleFileChange = (e) => {
  setFile(e.target.files[0]);
};

  return (
  
        <div class="templatemo-content">

          <h1>All Experiment</h1>
		<hr/>


<div id="container">
<div id="show" class="show">
<div id="cp_contact_form">
<form onSubmit={handleSubmit}>

	
				
				<div class="row">
                  <div class="col-md-12 margin-bottom-15">
                    <label for="firstName" class="control-label">Subject</label>
					<select name="Subject" class="form-control" id="firstName" onChange={handleInputChange} value={formData.Subject}>
					<option value="ABC">ABC</option>
					<option value="XYZ">XYZ</option>
					<option value="PQR">PQR</option>
					</select>
                  </div>

                </div>
				
                <div class="row">
                  <div class="col-md-6 margin-bottom-15">
                    <label for="firstName" class="control-label">Experiment Title</label>
                    <input type="text" name="ExperimentTitle" class="form-control" id="firstName" Placeholder="Title" onChange={handleInputChange} value={formData.ExperimentTitle}/>           
                  </div>
                  <div class="col-md-6 margin-bottom-15">
                    <label for="lastName" class="control-label">Experiment Component</label>
                    <input type="text" name="ExperimentComponent"  class="form-control" id="lastName" Placeholder="Component" onChange={handleInputChange} value={formData.ExperimentComponent}/>        
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 margin-bottom-15">
                    <label for="firstName" class="control-label">Experiment Abstract</label>
                    <textarea name="ExperimentAbstract" class="form-control" id="firstName" onChange={handleInputChange} value={formData.ExperimentAbstract}></textarea>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 margin-bottom-15">
                    <label for="firstName" class="control-label">Experiment Detail</label>
                    <textarea name="ExperimentDetail" class="form-control" id="firstName" onChange={handleInputChange} value={formData.ExperimentDetail}></textarea>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 margin-bottom-15">
                    <label for="firstName" class="control-label">Experiment Result</label>
                    <textarea name="ExperimentResult" class="form-control" id="firstName" onChange={handleInputChange} value={formData.ExperimentResult}></textarea>
                  </div>
                </div>				
				
				<div class="row">
                  <div class="col-md-12 margin-bottom-15">
                    <label for="firstName" class="control-label">Experiment Conclusion</label>
                    <textarea name="ExperimentConclusion" class="form-control" id="firstName" onChange={handleInputChange} value={formData.ExperimentConclusion}></textarea>
                  </div>
                </div>	
				

				<div class="row">
                  <div class="col-md-12 margin-bottom-15">
                    <label for="firstName" class="control-label">Experiment File</label>
                    <input type="File" name="content4" class="form-control" id="firstName"  onChange={handleFileChange}/>
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
 <h4 class="margin-bottom-15">Student Table</h4>
  { responseData }
  
 </div>


</div>
</div>
</div>

  );
}

export default Experiment;