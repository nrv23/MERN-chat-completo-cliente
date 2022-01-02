import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from '../Navbar/Navbar';
import './Chat.scss';

export const Chat = () => {

    const { user } = useSelector(state => state.auth);
    
    return (
        <div id="chat-container">
            <Navbar />
            <div id="chat-wrap">

            </div>
        </div>
    )
}
