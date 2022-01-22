import React, {useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { mantenerSesion } from '../../actions/authActions';
import { Navbar } from '../Navbar/Navbar';
import './Chat.scss';

import { getChatActions } from '../../actions/chatActions';
import { FriendList } from '../FriendList/FriendList';
import { Messenger } from '../Messenger/Messenger';

export const Chat = () => {
    
    const history = useHistory();    
    const dispatch = useDispatch()
    useEffect(() => {
        mantenerSesion(history,isLoggedIn);
    }, []);

    useEffect(() => {
        dispatch(getChatActions());
    },[dispatch]);

    const { 
        isLoggedIn,
        user: {
        
        } 
    } = useSelector(state => state.auth);

    const { 
        chats,
        error
    } = useSelector(state => state.chat);

    console.log({chats})

    return (
        <div id='chat-container'>
            <Navbar />
            <div id='chat-wrap'>
                <FriendList />
                <Messenger />
            </div>
        </div>
    )
}
