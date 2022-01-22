import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentChatAction } from '../../actions/chatActions';
import { Friend } from '../Friend/Friend';
import './FriendList.scss';

export const FriendList = () => {
     
    const { chats  } = useSelector(state => state.chat);
    const dispatch = useDispatch();

    const openChat = chat => {
        dispatch(setCurrentChatAction(chat));
    }

    return (
        <div id="friends" className="shadow-light">
            <div id="title">
                <h3 className="m-0">Friends</h3>
                <button>ADD</button>
            </div>

            <hr />
            <div id="friends-box">
                {
                    chats.length === 0 
                    ? <p id="no-chat">No friends added</p>
                    : chats.map(chat => {
                        <Friend click={() => openChat(chat)} data = {chat} key={chat.id} />
                    })
                }
            </div>
        </div>
    )
}
