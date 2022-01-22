import React from 'react'
import './Message.scss';

export const Message = ({chat,msg,index,user}) => {

    const determineMargin = () => {

        if(index +1 === chat.Messages.length) return;

        return msg.fromUserId === chat.Messages[index].fromUserId ? 'mb-5' : 'mb-10';
        //generar 5 pixeles de margen 2 o mas mensajes vienen del mismo usuario, sino 10 pixeles de margen 
    }

    return (
        <div className={`message ${determineMargin()} ${msg.fromUserId === user.id ? 'creator' : ''}`} >
            <div className={msg.fromUserId === user.id ? 'owner' : 'other-person'}>
                {
                    msg.fromUserId !== user.id && (

                        <h6 className="m-0">
                            {msg.User.firstName} {msg.User.lastName}
                        </h6>
                    )
                }
                {
                    msg.type === 'text'
                    ? 
                    
                        <p className="m-0">
                            {msg.message}
                        </p>
                    
                    : <img src={msg.message} alt="user upload" /> 
                }
            </div>
        </div>
    )
}
