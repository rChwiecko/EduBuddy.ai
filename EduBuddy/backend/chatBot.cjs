const OpenAI = require('openai');
require('dotenv').config({ path: '../.env' });
const prompt = async (promptMessage) => {
    try{
        const response = await fetch(process.env.API_URL, {
            method:"POST",
            headers : {
                "content-type":"application/json",
                Authorization: `Bearer ${process.env.API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "user",
                    content: promptMessage
                }]
            })
        })
        const data = await response.json()
        return (data['choices'][0].message.content)
    }
    catch(error){
        console.log(error)
    }
}
module.exports = {prompt}