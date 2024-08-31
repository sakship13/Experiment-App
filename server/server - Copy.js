const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3001; // You can use any port you prefer

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/Myapp';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Create a Mongoose model for your data
const FormSubmission = mongoose.model('FormSubmission', {
  userName: String,
  userEmail: String,
  userPhone: String,
  userMsg: String,
});

app.use(cors()); // Use the cors middleware to allow cross-origin requests

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define an API endpoint for form submission
app.post('/api/submit', (req, res) => {

  const formData = req.body;
  const formSubmission = new FormSubmission(formData);

  formSubmission.save()
    .then(() => {
      console.log('Form data saved to MongoDB');
      res.json({ message: 'Form data submitted successfully' });
    })
    .catch((error) => {
      console.error('Error saving form data:', error);
      res.status(500).json({ message: 'Error submitting form data' });
    });
	
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
