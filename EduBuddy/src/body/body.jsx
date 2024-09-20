import ChatSection from '../chat/chat';
import Footer from '../footer/footer';
import './body.css'
export default function BodyMain() {
    return (
        <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <ChatSection />
            <Footer />
        </div>
    );
}
