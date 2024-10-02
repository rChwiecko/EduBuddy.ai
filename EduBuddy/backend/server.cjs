const express = require('express');
const cors = require('cors');
const { prompt } = require('./chatBot.cjs');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));


const sendPrompt = async (userPrompt) => {
    const response = await prompt(userPrompt);  // Assuming 'prompt' is a function that handles the AI request
    return response;
}

io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('prompt', async (userPrompt) => {  // Use async here to handle the promise
        try {
            const response = await sendPrompt(userPrompt);  // Await the response from the AI
            socket.emit('res', response);  // Send the AI response back to the client
        } catch (error) {
            console.error('Error handling prompt:', error);
            socket.emit('res', 'Something went wrong');  // Handle error response
        }
    });
});



server.listen(3000, () => {
    console.log("listening")
})


// app.use(express.json());  // Use express.json() to handle JSON bodies
// app.use(cors())
// app.post('/chat', async (req, res) => {
//     try {
//         const { promptMessage } = req.body;  // Destructure to get the prompt from the request body
//         console.log("request: ", promptMessage);
        
//         const response = await prompt(promptMessage);  // Await the result from the prompt function
//         console.log(response)
//         res.json({ response });  // Send the response back as JSON
//     } catch (error) {
//         console.error('Error in backend:', error);  // Log the error for debugging
//         res.status(500).json({ error: 'Something went wrong' });  // Handle errors gracefully
//     }
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
