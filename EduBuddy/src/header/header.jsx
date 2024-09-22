import './header.css'
import { useState } from 'react';

export default function Header(){
    return (
        <div className='header w-100'>
            <div className='title'>EduBuddy.ai</div>
            <div class="top-right-icon-container">
               <div class="icon-circle">
                    <i class="fas fa-user"></i> 
                </div>
            </div>
        </div>
    )
}