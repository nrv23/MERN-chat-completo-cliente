import React from 'react'
import './MessageBox.scss'
import { Message } from '../Message/Message';
import { useSelector } from 'react-redux';

export const MessageBox = ({chat}) => {
    
    const { user } = useSelector(state => state.auth);
    
    return (
        <div id="msg-box">
            {
                chat.Messages.map((msg,i) => (
                    <Message 
                        key={msg.id} 
                        chat={chat} 
                        msg={msg}
                        index={i}
                        user={user}
                    />
                ))
            }
        </div>
    )
}
