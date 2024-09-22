import { useState } from 'react';
import './sideMenu.css'; // Import the CSS file for styling

export default function SideMenu() {
    const [sideBarState, setSideBarState] = useState(true);

    const sideBarStatusChange = (event) => {
        event.preventDefault();
        setSideBarState(!sideBarState);
    };

    return (
        <>
            {sideBarState && (
                <div className="side-menu-container open">
                    <div className='d-flex flex-row-reverse w-100'>
                        <button onClick={sideBarStatusChange} className="toggle-button">Close</button>
                    </div>
                    <div className="sidebar-content">
                    </div>
                </div>
            )}
            {!sideBarState && (
                <div className="side-menu-container closed">
                    <button onClick={sideBarStatusChange} className="toggle-button">Open</button>
                </div>
            )}
        </>
    );
}
