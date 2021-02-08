import PopupWithForm from './PopupWithForm.js';
import React, {useState, useContext, useEffect} from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {

    const [name, setName] = useState(' ');
    const [description, setDescription] = useState(' ');
    // Subscription to the context
    const currentUser = useContext(CurrentUserContext);

    function handleChangeName(e){
        setName(e.target.value);
    }

    function handleChangeAbout(e){
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Prevent the browser from navigating to the form address
        e.preventDefault();
        // Pass the values of the managed components to the external handler
        props.onUpdateUser({
            name,
            about: description,
        });
        } 

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
            isOpen={props.isOpen} 
            onClose={props.onClose}
            onSubmit = {handleSubmit}
            >
            <input id = "profile-name" type='text'
            name='name' 
            value = {name || ''}
            className="popup__input popup__input_type_name" 
            onChange={handleChangeName} 
            placeholder='Jacques Cousteau' 
            required maxLength="40" minLength="2"/>
            <span id="profile-name-error" className = "popup__error"></span>

            <input id = "profile-text" type='text' 
            name='about' className='popup__input popup__input_type_job' 
            value = {description || ''}
            onChange={handleChangeAbout} placeholder='Explorer' 
            required maxLength="200" minLength="2"/>
            <span id="profile-text-error" className = "popup__error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
