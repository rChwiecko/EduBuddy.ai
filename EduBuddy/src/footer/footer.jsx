import React, { useState } from 'react';

export default function Footer() {
    const [prompt, setPrompt] = useState(''); 
    const [currentMessage, setCurrentMessage] = useState('');

    const handlePrompt = (prompt) => {
        fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ prompt }),  // Send the prompt as a JSON string
        }).then(data => {
            console.log("success", data);
        }).catch(err => {
            console.log(err);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent the form from reloading the page
        handlePrompt(prompt);    // Call handlePrompt with the input value
        setPrompt('');           // Optionally clear the input after submission
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="prompt">Chat:</label> 
                <input
                    id="prompt"
                    name="prompt"
                    placeholder="Chat With EduBuddy"
                    type="text"
                    value={prompt}  // Bind input value to state
                    onChange={e => setPrompt(e.target.value)}  // Update state on input change
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
