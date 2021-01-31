import React from 'react';

function PopupWithImage(props){
    return (
        <div className= {`popup popup_type_image ${props.isOpen ? "popup_open" : ""}`}>
            <div className="popup_container_type_image">
                <img alt="Popup Image Picture" className="popup__image" src={props.src} />
                <h3 className= "popup__caption">{props.title}</h3>
                <button className="popup__close-button" onClick={props.onClose} type="reset" aria-label="Close Form"></button>
            </div>
        </div>
    )
}

export default PopupWithImage;