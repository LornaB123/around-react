import PopupWithForm from './PopupWithForm.js';
import React, {useState, useContext, useEffect} from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {

    const [name, setName] = useState(' ');
    const [description, setDescription] = useState(' ');
    // Subscription to the context
    const currentUser = useContext(CurrentUserContext);

    // After loading the current user from the API
    // their data will be used in managed components.
    useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
    }, [currentUser]); 

    return (

        <PopupWithForm 
            name="type_edit" 
            title="Edit Profile" 
            buttonText="Save" 
            isOpen={props.editProfileOpen} 
            onClose={props.handleClosePopups}>
            <input id = "profile-name" type='text' name='name' className="popup__input popup__input_type_name" placeholder='Jacques Cousteau' required maxLength="40" minLength="2"/>
            <span id="profile-name-error" className = "popup__error"></span>

            <input id = "profile-text" type='text' name='job' className='popup__input popup__input_type_job' placeholder='Explorer' required maxLength="200" minLength="2"/>
            <span id="profile-text-error" className = "popup__error"></span>
        </PopupWithForm>
    );


}

export default EditProfilePopup;
