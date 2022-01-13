import React from 'react';
import './Modal.scss';

export const Modal = ({children,click}) => {// el prop children llama a los componentes jsx que el componente modal rodea

    const findByKey = name => (
        children.map(el => {
            if(el.key === name) {
                return el;
            }
        })
    )

    

    return (
        <div className="modal-mask">
            <div className="modal-wrapper">
                <div className="modal-container"> 
                    <div className="modal-header">
                        {findByKey("header")}
                    </div>

                    <div className="modal-body">
                        {findByKey("body")}
                    </div>
                    <div className="modal-footer">
                        {findByKey("footer")}      
                    </div>
                </div>
            </div>
        </div>
    )
}
