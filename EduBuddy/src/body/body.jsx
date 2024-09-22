import { useState } from 'react'
import ChatSection from '../chat/chat';
import Footer from '../footer/footer';
import Header from '../header/header';
import './body.css'
export default function BodyMain() {
    const [messages, setMessages] = useState([]);

    const addMessage = (newMessage, origin) => {
        setMessages(prevMessages => [...prevMessages, {'message':newMessage,'origin':origin}]);
    }
    return (
        <div className='d-flex flex-grow-1 main'>
            <div class="d-flex flex-column justify-content-between align-items-center w-100 h-100">
                <Header />
                <ChatSection messages={messages}/>
                <Footer addMessage={addMessage}/>
            </div>
        </div>
    );
}
