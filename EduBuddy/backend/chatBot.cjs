const OpenAI = require('openai');
require('dotenv').config({ path: '../.env' });
const openai = new OpenAI();

let chatHistory = [
    { role: "system", content: "You are a chat bot that is for students, you help students manage/create schedules" }
];

async function prompt(userPrompt) {
    try {
        // Add the user's message to the chat history
        chatHistory.push({ role: "user", content: userPrompt });

        const stream = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: chatHistory,  // Send the entire chat history
            stream: true,
        });

        let completeResponse = '';

        // Process the streamed response
        for await (const chunk of stream) {
            if (chunk.choices && chunk.choices[0].delta && chunk.choices[0].delta.content) {
                completeResponse += chunk.choices[0].delta.content;
            }
        }

        // Add the AI's response to the chat history
        chatHistory.push({ role: "assistant", content: completeResponse });

        return completeResponse;  // Return the AI's complete response
    } catch (error) {
        console.error('Error in prompt function:', error);
        throw error;
    }
}
// const prompt = async (promptMessage) => {
//     try {
//         const response = await fetch(process.env.API_URL, {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json",
//                 Authorization: `Bearer ${process.env.API_KEY}`
//             },
//             body: JSON.stringify({
//                 model: "gpt-3.5-turbo",
//                 messages: [{
//                     role: "user",
//                     content: promptMessage
//                 }]
//             })
//         });
        
//         const data = await response.json();
        
//         // Check if data.choices exists and has elements
//         if (data && data.choices && data.choices.length > 0) {
//             return data.choices[0].message.content;
//         } else {
//             throw new Error('Invalid API response structure');
//         }
//     } catch (error) {
//         console.error('Error in prompt function:', error);
//         throw error;  // Re-throw the error to handle it in the calling function
//     }
// }

module.exports = {prompt}

async function func(){ 
    try {
        const res = await prompt("write a poem")
        console.log(res)
        const res1 = await prompt("what was my most recent question")
        console.log(res1)
    }catch(e){
        console.log(e)
    }

}
func()