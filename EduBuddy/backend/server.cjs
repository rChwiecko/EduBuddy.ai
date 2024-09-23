const express = require('express');
const cors = require('cors');
const { prompt } = require('./chatBot.cjs');
const app = express();

app.use(express.json());  // Use express.json() to handle JSON bodies
app.use(cors())
app.post('/chat', async (req, res) => {
    try {
        const { promptMessage } = req.body;  // Destructure to get the prompt from the request body
        console.log("request: ", promptMessage);
        
        const response = await prompt(promptMessage);  // Await the result from the prompt function
        console.log(response)
        res.json({ response });  // Send the response back as JSON
    } catch (error) {
        console.error('Error in backend:', error);  // Log the error for debugging
        res.status(500).json({ error: 'Something went wrong' });  // Handle errors gracefully
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
