const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());  // Use express.json() to handle JSON bodies
app.use(cors())
app.post('/chat', (req, res) => {
    const { prompt } = req.body;  // Destructure to get the prompt from the body
    console.log(prompt);  // This should now correctly log the prompt
    // res.body("success")
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
