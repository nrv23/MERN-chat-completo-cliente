import React, { useState } from 'react'
import './MessageInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useForm from '../../hooks/useForm';
import { useSelector } from 'react-redux';

export const MessageInput = ({chat}) => {

    const {user} = useSelector(state => state.auth)


    const [formValues, handleInputChange, reset] = useForm({
        message: '',
    });

    const [image,setImage] = useState(null);

    const sendMessage = (imageUpload) => {

        if(message.length < 1 && !imageUpload) return;
    
        const msg = {

            type: imageUpload ? 'image': 'text',
            fromUserId: user.id,
            toUserId: chat.Users.map(user => user.id),
            chatId: chat.id,
            message: imageUpload? image: message
        }


        reset();
        setImage(null);
        
        //llamar el socket para enviar el mensaje
    }

    const { message } = formValues;

    const handleKeyDown = (e,imageUpload) => {
        // en esta funcion se envia el mensaje a darle entener
        if(e.key === 'Enter') sendMessage(imageUpload)
    }

    const handleEmitTypingEvent = ({target:{value}}) => {


        //notifcar a los otros usuarios en esta funcion cuando un usuario esta escribiendo algo 
    }

    const handleMessage = e => {
        handleInputChange(e);
        handleEmitTypingEvent(e);
    }

    return (
        <div id="input-container">
            <div id="message-input" >
                <input 
                    type="text" 
                    name="message" 
                    id="" 
                    placeholder="Type somenting..."
                    value={message}
                    onChange={handleInputChange}
                />
                <FontAwesomeIcon 
                    icon={['far','smile']}  
                    className="fa-icon"
                />
            </div> 
        </div>
    )
}
