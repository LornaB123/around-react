import React from 'react';
//import CurrentUserContext from '../contexts/CurrentUserContext.js';

function PopupWithForm (props) {


    return (

        <div className = {`popup popup_${props.name} ${props.isOpen ? "popup_open" : ""}`} onClick={props.onClose}>
            <div className="popup__container">
                <form action="#" className= "popup__form `${props.name}-form`" onSubmit = {props.onSubmit} noValidate>
                    <h2 className="popup__title">{props.title}</h2> 
                    {props.children}
                    <button className="popup__save" type="submit" aria-label="Save">{props.buttonText}</button>
                    <button className="popup__close-button" onClick= {props.onClose} type="reset" aria-label="Close Form"></button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;