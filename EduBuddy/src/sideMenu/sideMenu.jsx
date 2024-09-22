import { useState } from 'react';
import './sideMenu.css'; // Import the CSS file for styling

export default function SideMenu() {
    const [sideBarState, setSideBarState] = useState(false);

    const sideBarStatusChange = (event) => {
        event.preventDefault();
        setSideBarState(!sideBarState);
    };

    return (
        <div className={`side-menu-container ${sideBarState ? 'open' : 'closed'} bg-dark`}>
            <div className='w-100 d-flex flex-row-reverse'>
                <div className='arrow-outer' onClick={sideBarStatusChange}>
                    <div className={`arrow-inner ${sideBarState? 'open':'closed'}`}></div>
                </div>
            </div>
            <div className="sidebar-content">
                {sideBarState ? (
                    <>content</>
                ) : ''}
            </div>
        </div>
    );
}
