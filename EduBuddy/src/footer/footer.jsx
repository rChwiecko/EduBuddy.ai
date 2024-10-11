import React, { useState, useEffect} from 'react';
import './footer.css'
import { io } from 'socket.io-client'
export default function Footer({addMessage}) {
    const socket = io('http://localhost:3000');
    const [prompt, setPrompt] = useState(''); 
    const [currentMessage, setCurrentMessage] = useState('');
    const handlePrompt = (promptMessage) => {
        fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ promptMessage }),  // Send the prompt as a JSON string
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();  // Parse the response as JSON
        })
        .then(data => {
            console.log("response: ", data.response);  // Log the AI's response
            addMessage(data.response, "res");  // Add the AI's response to your chat UI
        })
        .catch(err => {
            console.log('Error:', err);  // Handle any errors that occur during the fetch
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent the form from reloading the page
        socket.emit('prompt',prompt);  // Call handlePrompt with the input value
        addMessage(prompt, 'user');
        setPrompt('');           // Optionally clear the input after submission
    }
    socket.on('connection', () => {
        socket.on('res', (res) => {
            addMessage(res, 'res')
        })    
    })

    return (
            <div className='container mt-5 w-100 d-flex justify-content-center pb-5'>  
                <form onSubmit={handleSubmit} className='d-flex align-items-center justify-content-center w-75'>
                <input
                    autoComplete='off'
                    className='input-box'
                    id="prompt"
                    name="prompt"
                    placeholder="Chat with EduBuddy"
                    type="text"
                    value={prompt}  // Bind input value to state
                    onChange={e => setPrompt(e.target.value)}  // Update state on input change
                    style={{ width: '75%',
                            paddingLeft: '20px',
                     }}  // Set the input width to 75% of the form
                />
                <button className='input-button' type="submit">Send</button>
                </form>
            </div>
    );
}
