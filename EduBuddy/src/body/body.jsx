import ChatSection from '../chat/chat';
import Footer from '../footer/footer';
import Header from '../header/header';
import './body.css'
export default function BodyMain() {
    return (
        <div className='d-flex flex-grow-1 main'>
            <div class="d-flex flex-column justify-content-between align-items-center w-100 h-100">
                <Header />
                <ChatSection />
                <Footer />
            </div>
        </div>
    );
}
