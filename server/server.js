const express = require('express');
//const mongoose = require('mongoose');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3001; // You can use any port you prefer
app.use(cors()); // Use the cors middleware to allow cross-origin requests

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.json());

const multer = require('multer');
//const upload = multer();

const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Upload files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
	const uniqueFilename = Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' + file.originalname;
    //cb(null, file.originalname); // Use the original file name
	cb(null, uniqueFilename); // Use the original file name
  }
});

const upload = multer({ storage: storage });

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'experiment',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define an API endpoint to interact with the database
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM userreg';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json(results);
  });
});


app.post('/api/Loginpage', (req, res) => {
  console.log('User Login');
  const { UName, Upass } = req.body;
  console.log(UName);
  console.log(Upass);
  const sql = 'SELECT * FROM userreg WHERE Email = ? AND Pass = ?';
  const values = [UName, Upass];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length === 1) {
      // Successful login
      res.json({ message: 'Login successful' });
    } else {
      // Invalid login
      //res.status(401).json({ message: 'Login failed' });
	  res.json({ message: 'Login failed' });
    }
  });
  
});


app.post('/api/LoginStudent', (req, res) => {
  console.log('User Student');
  const { UName, Upass } = req.body;
  console.log(UName);
  console.log(Upass);
  const sql = 'SELECT * FROM student WHERE Email = ? AND Pass = ?';
  const values = [UName, Upass];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length === 1) {
      // Successful login
	  const studentInfo = results[0];
	  const { Sid,Name,Department,Year } = studentInfo;
	  
      res.json({ Sid,Name,Department,Year,message: 'Login successful' });
	  
    } else {
      // Invalid login
      //res.status(401).json({ message: 'Login failed' });
	  res.json({ message: 'Login failed' });
    }
  });
  
});

// Define an API endpoint to insert data
app.post('/api/Subjectinsert', (req, res) => {
  const { SName, Department, Year } = req.body;

  const sql = 'INSERT INTO subject (SName, Department, Year) VALUES (?, ?, ?)';
  const values = [SName, Department, Year];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json({ message: 'Subject inserted successfully' });
  });
});

app.post('/api/Subjectshow', (req, res) => {
  const sql = 'SELECT * FROM subject';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
	
	// Format results into an HTML table
    const tableRows = results.map(row => {
      return `<tr><td>${row.SBID}</td><td>${row.SName}</td><td>${row.Department}</td><td>${row.Year}</td></tr>`;
      // Replace 'column1', 'column2', etc. with your actual column names
    });

    // Construct the HTML table
    const htmlTable=`
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
			<th>ID</th>
            <th>Name</th>
            <th>Department</th>
			<th>Year</th>
            <!-- Add more column headers as needed -->
          </tr>
        </thead>
        <tbody>
          ${tableRows.join('')}
        </tbody>
      </table>
    `;

    // Send the HTML table as the response
    res.send(htmlTable);
	
    //res.json(results);
  });
});


// Define an API endpoint to insert data
app.post('/api/Feedbackinsert', (req, res) => {
  const { ID, Tital, Feedback } = req.body;

console.log(ID);	
console.log(Tital);	
console.log(Feedback);			

	
  const sql = 'INSERT INTO feedback(SID, Title, Feedbackdata,Fdate) VALUES (?, ?, ?,now())';
  const values = [ID, Tital, Feedback];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json({ message: 'Feedback Posted successfully' });
  });
  
});

app.post('/api/Feedbackshow', (req, res) => {
  const sql = 'SELECT * FROM feedback';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
	
	// Format results into an HTML table
    const tableRows = results.map(row => {
			const date = new Date(row.Fdate);
	const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
	
      return `<tr><td>${row.FID}</td><td>${row.SID}</td><td>${row.Title}</td><td>${row.Feedbackdata}</td><td>${formattedDate}</td></tr>`;
      // Replace 'column1', 'column2', etc. with your actual column names
    });

    // Construct the HTML table
    const htmlTable=`
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
			<th>ID</th>
			<th>SID</th>
            <th>Title</th>
            <th>Feedback</th>
			<th>Date</th>
            <!-- Add more column headers as needed -->
          </tr>
        </thead>
        <tbody>
          ${tableRows.join('')}
        </tbody>
      </table>
    `;

    // Send the HTML table as the response
    res.send(htmlTable);
	
    //res.json(results);
  });
});


app.post('/api/Attendanceshow', (req, res) => {
  const sql = 'SELECT * FROM studattend,student where studattend.SID=student.Sid';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
	
	// Format results into an HTML table
    const tableRows = results.map(row => {
		
	const date = new Date(row.ADate);
	const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;


      return `<tr><td>${row.EID}</td><td>${row.SID}</td><td>${formattedDate}</td><td>${row.Name}</td><td>${row.PRN}</td><td>${row.Department}</td><td>${row.Year}</td></tr>`;
      // Replace 'column1', 'column2', etc. with your actual column names
    });

    // Construct the HTML table
    const htmlTable=`
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
			<th>EID</th>
			<th>SID</th>
			<th>Date</th>
            <th>Name</th>
            <th>PRN</th>
			<th>Department</th>
			<th>Year</th>
            <!-- Add more column headers as needed -->
          </tr>
        </thead>
        <tbody>
          ${tableRows.join('')}
        </tbody>
      </table>
    `;

    // Send the HTML table as the response
    res.send(htmlTable);
	
    //res.json(results);
  });
});

app.post('/api/StudentSubjectshow', upload.none(), (req, res) => {
  const { Department, Year } = req.body;
  console.log(Department);
  console.log(Year);
  const sql = 'SELECT * FROM subject WHERE Department = ? AND Year = ?';
  const values = [Department, Year];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
	
	// Format results into an HTML table
    const tableRows = results.map(row => {
      return `<div style="margin: 10px;padding: 10px 15px;border-radius: 10px;border: 1px #aaa solid;" id="${row.SBID}" onClick="window.reactFunction('${row.SName}');"><h1>${row.SName}</h1><b>Department -</b>${row.Department}<br><b>Year -</b>${row.Year}</div>`;
      // Replace 'column1', 'column2', etc. with your actual column names
    });
	
	//onclick="window.reactFunctionJoin('+str(row[0])+','+str(PID)+');"

    // Construct the HTML table
    const htmlTable=`
      <h1>Experiment Subject List</h1>
		<hr/><div class="table table-striped table-hover">
          ${tableRows.join('')}
      </div>
    `;

    // Send the HTML table as the response
    res.send(htmlTable);
	
    //res.json(results);
  });
});


app.post('/api/StudentExprimentListshow', upload.none(), (req, res) => {
  const { ID,Department, Year,Subject } = req.body;
  console.log(ID);
  console.log(Department);
  console.log(Year);
  console.log(Subject);
  
  const sql = 'SELECT * FROM experimenttab WHERE Subject = ?';
  const values = [Subject];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
	
	// Format results into an HTML table
    const tableRows = results.map(row => {
      return `<div style="margin: 10px;padding: 10px 15px;border-radius: 10px;border: 1px #aaa solid;" id="${row.EID}" onClick="window.reactFunctionExp('${row.EID}');"><h1>${row.ExperimentTitle}</h1><b>Subject -</b>${row.Subject}</div>`;
      // Replace 'column1', 'column2', etc. with your actual column names
    });
	
	//onclick="window.reactFunctionJoin('+str(row[0])+','+str(PID)+');"

    // Construct the HTML table
    const htmlTable=`
      <h1>Experiment List</h1>
		<hr/><div class="table table-striped table-hover">
          ${tableRows.join('')}
      </div>
    `;

    // Send the HTML table as the response
    res.send(htmlTable);
	
    //res.json(results);
  });
});

app.post('/api/StudentExprimentshow', upload.none(), (req, res) => {
  const { ID,Department, Year,Experiment } = req.body;
  console.log(ID);
  console.log(Department);
  console.log(Year);
  console.log(Experiment);
  
  const sql1 = 'INSERT INTO studattend(SID, EID,ADate) VALUES (?, ?,now())';
  const values1 = [ID, Experiment];

  db.query(sql1, values1, (err, results) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      //return res.status(500).json({ message: 'Internal server error' });
    }
    //res.json({ message: 'Feedback Posted successfully' });
  });
  
  const sql = 'SELECT * FROM experimenttab WHERE EID = ?';
  const values = [Experiment];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
	
	// Format results into an HTML table
    const tableRows = results.map(row => {
      return `<h1>${row.ExperimentTitle}</h1>
		<hr/><img src="http://localhost:3001/uploads/${row.Filepath}" style="width:100%;" /><hr/><div style=" " id="${row.EID}" > <b>Subject -</b>${row.Subject}<hr/><b>Component -</b>${row.ExperimentComponent} <hr/><b>Abstract -</b>${row.ExperimentAbstract} <hr/><b>Experiment -</b>${row.ExperimentDetail}<hr/><b>Result -</b>${row.ExperimentResult}<hr/><b>Conclusion -</b>${row.ExperimentConclusion}</div>`;
      // Replace 'column1', 'column2', etc. with your actual column names
    });
	
	//onclick="window.reactFunctionJoin('+str(row[0])+','+str(PID)+');"

    // Construct the HTML table
    const htmlTable=`
      <div class="table table-striped table-hover">
          ${tableRows.join('')}
      </div>
    `;

    // Send the HTML table as the response
    res.send(htmlTable);
	
    //res.json(results);
  });
});


app.post('/api/StudentProfile', upload.none(), (req, res) => {
  const { Sid,Department, Year } = req.body;
  console.log(Sid);
  console.log(Department);
  console.log(Year);
  const sql = 'SELECT * FROM student WHERE Sid = ?';
  const values = [Sid];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
	
	// Format results into an HTML table
    const tableRows = results.map(row => {
      return `<tr><td><b>Name -</b></td><td>${row.Name}</td></tr>
	  <tr><td><b>Email -</b></td><td>${row.Email}</td></tr>
	  <tr><td><b>PRN -</b></td><td>${row.PRN}</td></tr>
	  <tr><td><b>Department -</b></td><td>${row.Department}</td></tr>
	  <tr><td><b>Year -</b></td><td>${row.Year}</td></tr>`;
      // Replace 'column1', 'column2', etc. with your actual column names
    });

    // Construct the HTML table
    const htmlTable=`
     <table class="table table-striped table-hover table-bordered">
        <tbody>
          ${tableRows.join('')}
        </tbody>
      </table>
    `;

    // Send the HTML table as the response
    res.send(htmlTable);
	
    //res.json(results);
  });
});


// Define an API endpoint to insert data
app.post('/api/Studentinsert', (req, res) => {
  const { Name, Email, Pass, PRN, Department, Year } = req.body;

  const sql = 'INSERT INTO student(Name,Email,Pass,PRN,Department,Year) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [Name, Email, Pass, PRN, Department, Year];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json({ message: 'Student Inserted Successfully' });
  });
});


app.post('/api/Studentshow', (req, res) => {
  const sql = 'SELECT * FROM student';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
	
	// Format results into an HTML table
    const tableRows = results.map(row => {
      return `<tr><td>${row.Sid}</td><td>${row.Name}</td><td>${row.Email}</td><td>${row.PRN}</td><td>${row.Department}</td><td>${row.Year}</td></tr>`;
      // Replace 'column1', 'column2', etc. with your actual column names
    });

    // Construct the HTML table
    const htmlTable=`
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
			<th>ID</th>
            <th>Name</th>
			<th>Email</th>
			<th>PRN</th>
            <th>Department</th>
			<th>Year</th>
            <!-- Add more column headers as needed -->
          </tr>
        </thead>
        <tbody>
          ${tableRows.join('')}
        </tbody>
      </table>
    `;

    // Send the HTML table as the response
    res.send(htmlTable);
	
    //res.json(results);
  });
});



// Define an API endpoint to insert data
app.post('/api/Experimentinsert', upload.single('file'), (req, res) => {
  const { Subject, ExperimentTitle, ExperimentComponent, ExperimentAbstract, ExperimentDetail, ExperimentResult, ExperimentConclusion } = req.body;

  console.log(Subject);
  console.log(ExperimentTitle);
  console.log(ExperimentComponent);
  
  // Log the uploaded file details
  console.log('Uploaded file:', req.file);
  
  const sql = 'INSERT INTO experimenttab(Subject,ExperimentTitle,ExperimentComponent,ExperimentAbstract,ExperimentDetail,ExperimentResult,ExperimentConclusion,Filepath) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [Subject, ExperimentTitle, ExperimentComponent, ExperimentAbstract, ExperimentDetail, ExperimentResult,ExperimentConclusion,req.file.filename];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json({ message: 'Experiment Inserted Successfully' });
  });
  
  
});



app.post('/api/Experimentshow', (req, res) => {
  const sql = 'SELECT * FROM experimenttab';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
	
	// Format results into an HTML table
    const tableRows = results.map(row => {
      return `<tr><td>${row.EID}</td><td>${row.Subject}</td><td>${row.ExperimentTitle}</td></tr>`;
      // Replace 'column1', 'column2', etc. with your actual column names
    });

    // Construct the HTML table
    const htmlTable=`
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
			<th>ID</th>
            <th>Subject</th>
			<th>Title</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows.join('')}
        </tbody>
      </table>
    `;

    // Send the HTML table as the response
    res.send(htmlTable);
	
    //res.json(results);
  });
});


// Define an API endpoint to insert data
app.post('/api/Userinsert', (req, res) => {
  const { Uname, Email, Utyp, Pass, Mobile } = req.body;

  const sql = 'INSERT INTO userreg (Uname,Email,Utyp,Pass,Mobile) VALUES (?, ?, ?, ?, ?)';
  const values = [Uname, Email, Utyp, Pass, Mobile];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json({ message: 'User inserted successfully' });
  });
});

// Define an API endpoint to interact with the database
//app.get/post

app.post('/api/Usershow', (req, res) => {
  const sql = 'SELECT * FROM userreg';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
	
	// Format results into an HTML table
    const tableRows = results.map(row => {
      return `<tr><td>${row.UID}</td><td>${row.Uname}</td><td>${row.Email}</td><td>${row.Utyp}</td><td>${row.Mobile}</td></tr>`;
      // Replace 'column1', 'column2', etc. with your actual column names
    });

    // Construct the HTML table
    const htmlTable=`
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
		    <th>ID</th>
            <th>Name</th>
            <th>Email</th>
			<th>Type</th>
			<th>Mobile</th>
            <!-- Add more column headers as needed -->
          </tr>
        </thead>
        <tbody>
          ${tableRows.join('')}
        </tbody>
      </table>
    `;

    // Send the HTML table as the response
    res.send(htmlTable);
	
    //res.json(results);
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
