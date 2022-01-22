import React from 'react';
import { useSelector } from 'react-redux';
import { userStatus } from '../../utils/helpers';
import './Friend.scss';

export const Friend = ({data,click}) => {
    

    const {currentChat} = useSelector(state => state.chat)

    const isChatOpened = () => { //visualizar el chat seleccionado

       return currentChat.id === data.id && 'opended'; // hay un chat seleccionado
    }

    const lastMessage = () => {
       if(data.Messages.length > 0 ) {
        
        const message = data.Messages[data.Messages.length - 1] // obtener el ultimo mensaje enviado
        return message.type === 'image' ? 'image uploaded': message.message;

       } else {

        return '';
       }
    }

    return (
        <div className={`friend-list ${isChatOpened()}`} onClick={click} >   
            <div>
                <img src={data.Users[0].avatar} alt="User avatar" width="40" height="40" />
                <div className="friend-info">
                    <h4 className="m-0"> {data.Users[0].firstName} {data.Users[0].lastName} </h4>
                    <h5 className="m-0"> {lastMessage()} </h5>
                </div>
            </div>

            <div className="friend-status">

                <span className={`online-status ${userStatus(data.Users[0])}`} ></span>
            </div>
        </div>
    )
}
