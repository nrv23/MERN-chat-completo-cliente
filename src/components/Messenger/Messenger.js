import React from 'react'
import './Messenger.scss';
import { ChatHeader } from '../ChatHeader/ChatHeader';
import { MessageInput } from '../MessageInput/MessageInput';
import { MessageBox } from '../MessageBox/MessageBox';
import { useSelector } from 'react-redux';

export const Messenger = () => {

    const { currentChat:chat } = useSelector(state => state.chat);

    const activeChat = () =>  Object.keys(chat).length > 0 ;

    return (
        <div id="messenger" className="shadow-light">
            {
               activeChat() 
                ? (
                    <div id="messenger-wrap">
                        <ChatHeader chat={chat} />
                        <hr />
                        <MessageBox chat={chat} />
                        <MessageInput chat={chat} />
                    </div>
                    )
                : (
                    <p>No active Chats</p>
                    )
            }
        </div>
    )
}
