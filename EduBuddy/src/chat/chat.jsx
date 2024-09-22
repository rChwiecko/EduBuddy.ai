import './chat.css'
export default function ChatSection() {
    return (
        <div className="h-100 chat w-100">
            <div className='chat-section'>
                <div className='user-message-body'>
                    <div className="chat-bubble use">
                        <p className='user-message'>Text</p>
                    </div>
                </div>
                <div className='response-body'>
                    <div className='chat-bubble res'>
                        <p className='response'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, nihil accusamus hic ratione quis dolores? Error laboriosam dolore et quam in? Sint excepturi nesciunt perferendis quaerat quidem vero voluptas corporis!</p>    
                    </div>
                </div>    
            </div>
        </div>
    );
}
