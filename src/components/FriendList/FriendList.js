import React from 'react'
import { useSelector } from 'react-redux';
import { Friend } from '../Friend/Friend';
import './FriendList.scss';

export const FriendList = () => {
     
    const { chats  } = useSelector(state => state.chat);
    
    return (
        <div id="friends">
            <div id="title">
                <h1 className="m-0">Friends</h1>
                <button>ADD</button>
            </div>

            <hr />
            <div id="friends-box">
                {
                    chats.length === 0 
                    ? <p id="no-chat">No friends added</p>
                    : chats.map(chat => {
                        <Friend data = {chat} key={chat.id} />
                    })
                }
            </div>
        </div>
    )
}
