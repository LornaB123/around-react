import React from 'react';

function PopupWithImage(props){
    const {card, isOpen, onClose, src, title} = props;

    return (
        <div className= {`popup popup_type_image ${props.isOpen ? "popup_open" : ""}`}>
            <div className="popup_container_type_image">
                <img alt="Popup Image Picture" className="popup__image" src={card && card.link} />
                <h3 className= "popup__caption">{card.name}</h3>
                <button className="popup__close-button" onClick={props.onClose} type="reset" aria-label="Close Form"></button>
            </div>
        </div>
    )
}

export default PopupWithImage;