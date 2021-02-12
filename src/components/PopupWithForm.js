import React from 'react';
function PopupWithForm (props) {
    const {
        name, 
        onSubmit,
        onClose,
        isOpen,
        buttonText,
        children,
        title}
        = props; 

    return (

        <div className = {`popup popup_${name} ${isOpen ? "popup_open" : ""}`} onClick={onClose}>
            <div className="popup__container">
                <form action="#" className= {`popup__form ${name}-form`} onSubmit = {onSubmit} noValidate>
                    <h2 className="popup__title">{title}</h2> 
                    {children}
                    <button className="popup__save" type="submit" aria-label="Save">{buttonText}</button>
                    <button className="popup__close-button" onClick= {onClose} type="reset" aria-label="Close Form"></button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;