import React from 'react';

function PopupWithImage(props){
    const {card, isOpen, onClose} = props;

    return (
        <div className= {`popup popup_type_image ${isOpen ? "popup_open" : ""}`}>
            <div className="popup_container_type_image">
                <img alt="Popup Image Picture" className="popup__image" src={card && card.link} />
                <h3 className= "popup__caption">{card.name}</h3>
                <button className="popup__close-button" onClick={onClose} type="reset" aria-label="Close Form"></button>
            </div>
        </div>
    )
}

export default PopupWithImage;