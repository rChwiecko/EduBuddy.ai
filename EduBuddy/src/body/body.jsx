import ChatSection from '../chat/chat';
import Footer from '../footer/footer';
import './body.css'
export default function BodyMain() {
    return (
        <div className='d-flex flex-grow-1 bg-secondary'>
            <div class="d-flex flex-column justify-content-between align-items-center w-100 h-100">
                <ChatSection />
                <Footer />
            </div>
        </div>
    );
}
