import PopupWithForm from './PopupWithForm.js';
import React, {useRef} from 'react';

function EditAvatarPopup(props) {
    const {isOpen, onClose, onUpdateAvatar} = props;
    const avatarRef = useRef();


    function handleSubmit(e) {
        // Prevent the browser from navigating to the form address
        e.preventDefault();
        // Pass the values of the managed components to the external handler
        onUpdateAvatar(avatarRef.current.value)/* The value of the input which we got using the ref */
        }  


    return (

    <PopupWithForm 
        name="type_avatar"
        value = {avatarRef || ''}
        title="Change Profile Picture" 
        buttonText="Save" 
        isOpen={isOpen} 
        onClose={onClose}
        onUpdateAvatar={onUpdateAvatar}
        onSubmit={handleSubmit}>
        <input id = "avatar-URL" type='url' name='avatarURL' className="popup__input popup__input_type_avatar-URL" minLength="2" ref={avatarRef} />
        <span id="avatar-URL-error" className = "popup__error"></span>
    </PopupWithForm>

    )
}

export default EditAvatarPopup;
