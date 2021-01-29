import React, {useState} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';



function App() {
    const [editAvatarOpen, setEditAvatarOpen] = useState(false);
    const [editProfileOpen, setEditProfileOpen] = useState(false);
    const [addCardOpen, setAddCardOpen] = useState(false);
    const [deletePopupOpen, setDeletePopupOpen] = useState(false);
    const [imagePopupOpen, setImagePopupOpen] = useState(false);
    //set image popup states
    const [selectedLink, setSelectedLink] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');
    //handler functions for popups
    function handleEditAvatarClick(e) {
        setEditAvatarOpen(true);
    } 

    function handleEditProfileClick(e) {
        setEditProfileOpen(true);
    }

    function handleAddCardClick(e) {
        setAddCardOpen(true);
    }

    function handleDeleteCardClick(e) {
        setDeletePopupOpen(true);
    }

    function handleClosePopups(e){
        if(e.target !== e.currentTarget)
        return
        setEditAvatarOpen(false);
        setEditProfileOpen(false);
        setAddCardOpen(false);
        setDeletePopupOpen(false);
        setImagePopupOpen(false);
    }

    function handleCardClick(link, title) {
        setSelectedLink(link);
        setSelectedTitle(title);
        setImagePopupOpen(true);
    }

    return (
    
    <div className="body">
    <Header />
    <Main 
    //prop values passed to main
     handleEditAvatarClick = {handleEditAvatarClick}
     handleEditProfileClick = {handleEditProfileClick}
     handleAddCardClick = {handleAddCardClick}
     handleDeleteCardClick = {handleDeleteCardClick}
     handleCardClick = {(link, title) => {handleCardClick(link, title)}}
    />
    
    <PopupWithForm name="type_avatar" title="Change Profile Picture" buttonText="Save" isOpen={editAvatarOpen} onClose={handleClosePopups}>
        <input id = "avatar-URL" type='url' name='avatarURL' className="popup__input popup__input_type_avatar-URL" minLength="2" />
        <span id="avatar-URL-error" className = "popup__error"></span>
    </PopupWithForm>

    <PopupWithForm name="type_edit" title="Edit Profile" buttonText="Save" isOpen={editProfileOpen} onClose={handleClosePopups}>
        <input id = "profile-name" type='text' name='name' className="popup__input popup__input_type_name" placeholder='Jacques Cousteau' required maxLength="40" minLength="2"/>
        <span id="profile-name-error" className = "popup__error"></span>

        <input id = "profile-text" type='text' name='job' className='popup__input popup__input_type_job' placeholder='Explorer' required maxLength="200" minLength="2"/>
        <span id="profile-text-error" className = "popup__error"></span>
    </PopupWithForm>

    <PopupWithForm name="type_add-card" title="New Place" buttonText="Create" isOpen={addCardOpen} onClose={handleClosePopups}>
        <input id="card-title" type='text' name='card-title' className="popup__input popup__input_type_title" placeholder='Title' required maxLength="30" minLength="2"/>
        <span id="card-title-error" className = "popup__error"></span>

        <input id="card-url" type='url' name='card-link' className='popup__input popup__input_type_link' placeholder='Image Link' required/>
        <span id="card-url-error" className = "popup__error"></span>
    </PopupWithForm>

    <PopupWithForm name="type_delete-card" title="Are you sure?" buttonText="Yes" isOpen={deletePopupOpen} onClose={handleClosePopups} />

    <PopupWithImage link={selectedLink} title={selectedTitle} isOpen={imagePopupOpen} onClose={handleClosePopups} />

    <Footer />
     
    </div>
  );
  }
export default App;
