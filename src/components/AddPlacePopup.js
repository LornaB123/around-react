import PopupWithForm from './PopupWithForm.js';
import React, {useState} from 'react';

function AddPlacePopup(props) {

    const {
        isOpen,
        onClose,
        onAddPlace
    } = props;

    const [cardName, setCardName] = useState('');
    const [link, setLink] = useState('');

    function handleChangeCardName(e){
        setCardName(e.target.value);
    }

    function handleChangeLink(e){
        setLink(e.target.value);
    }
    
    function handleSubmit(e) {
        // Prevent the browser from navigating to the form address
        e.preventDefault();
        // Pass the values of the managed components to the external handler
        onAddPlace({
            name: cardName,
            link
        });
        setLink('');
        setCardName('');
        }

    return (

        <PopupWithForm 
            name="type_add-card" 
            title="New Place" 
            buttonText="Create" 
            isOpen={isOpen} 
            onClose={onClose}
            onSubmit={handleSubmit}>

            <input id="card-title" 
            type='text' 
            name='card-title' 
            value = {cardName}
            onChange = {handleChangeCardName}
            className="popup__input popup__input_type_title" 
            placeholder='Title' required maxLength="30" minLength="2"/>
            <span id="card-title-error" className = "popup__error"></span>

            <input id="card-url" 
            type='url' 
            name='card-link' 
            value = {link}
            onChange = {handleChangeLink}
            className='popup__input popup__input_type_link' 
            placeholder='Image Link' required/>
            <span id="card-url-error" className = "popup__error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;