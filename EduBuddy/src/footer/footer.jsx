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
        <div className='w-100 pb-4 d-flex justify-content-center align-items-center'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="prompt" className='me-3'>Chat:</label> 
                <input
                    className='form-control flex-grow-1'
                    id="prompt"
                    name="prompt"
                    placeholder="Chat With EduBuddy"
                    type="text"
                    value={prompt}  // Bind input value to state
                    onChange={e => setPrompt(e.target.value)}  // Update state on input change
                />
                <button className="btn btn-primary ms-2" type="submit">Submit</button>
            </form>
        </div>
    );
}
