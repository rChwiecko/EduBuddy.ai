import './chat.css'
import { useEffect, useRef } from 'react';
export default function ChatSection({ messages }) {
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    return (
        <div className="h-100 chat w-100">
            <div className='chat-section'>
                        {messages.map((message, index) => (
                            <div className={`${message["origin"]}-body`}>
                                <div key={index} className={`chat-bubble ${message["origin"]}`}>
                                    {message["message"]}
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef}/>
            </div>
        </div>
    );
}
