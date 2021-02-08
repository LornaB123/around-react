import React, {useEffect, useState} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';



function App() {
    const [editAvatarOpen, setEditAvatarOpen] = useState(false);
    const [editProfileOpen, setEditProfileOpen] = useState(false);
    const [addCardOpen, setAddCardOpen] = useState(false);
    const [deletePopupOpen, setDeletePopupOpen] = useState(false);
    const [imagePopupOpen, setImagePopupOpen] = useState(false);
    const [likeCardButton, setLikeCardButton] = useState(false);
    //set image popup states
    const [selectedCard, setSelectedCard] = useState('');
    //state variable for current user - calls api.getUserInfo()
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        api.getUserInfo()
        .then((res) => {
            setCurrentUser(res);
        })
        .catch(err => console.log(err));
    }, []);
    
    function handleUpdateUser({name, about}){
        api.setUserInfo({name, about})
        .then((res) => {
            console.log(res);
            setCurrentUser(res);
        })
        .catch((err) => console.log(err))
        .finally(() => handleClosePopups());
    }

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
    
    function handleLikeClick(e) {
        setLikeCardButton(true);
    }


    function closeAllPopups() {
        setEditAvatarOpen(false);
        setEditProfileOpen(false);
        setAddCardOpen(false);
        setDeletePopupOpen(false);
        setImagePopupOpen(false);
    }

    function handleClosePopups(e){
        if(e.target !== e.currentTarget)
        return
        closeAllPopups()
    }

    function handleCardClick(card) {
        setSelectedCard(card);
        setImagePopupOpen(true);
    }

    return (
    
    <div className="body">
    <CurrentUserContext.Provider value={currentUser}>
    <Header />
    
    <Main 
    //prop values passed to main
     onEditAvatar = {handleEditAvatarClick}
     onEditProfile = {handleEditProfileClick}
     onAddPlace = {handleAddCardClick}
     onCardDelete = {handleDeleteCardClick}
     onCardClick = {handleCardClick}
     onCardLike = {handleLikeClick}
    />

    <Footer />

    <PopupWithForm 
        name="type_avatar"
        title="Change Profile Picture" 
        buttonText="Save" 
        isOpen={editAvatarOpen} 
        onClose={handleClosePopups}>
        <input id = "avatar-URL" type='url' name='avatarURL' className="popup__input popup__input_type_avatar-URL" minLength="2" />
        <span id="avatar-URL-error" className = "popup__error"></span>
    </PopupWithForm>

    <EditProfilePopup 
        isOpen={editProfileOpen} 
        onClose={handleClosePopups} 
        onUpdateUser={handleUpdateUser}/>

    <PopupWithForm 
        name="type_add-card" 
        title="New Place" 
        buttonText="Create" 
        isOpen={addCardOpen} 
        onClose={handleClosePopups}>
        <input id="card-title" type='text' name='card-title' className="popup__input popup__input_type_title" placeholder='Title' required maxLength="30" minLength="2"/>
        <span id="card-title-error" className = "popup__error"></span>

        <input id="card-url" type='url' name='card-link' className='popup__input popup__input_type_link' placeholder='Image Link' required/>
        <span id="card-url-error" className = "popup__error"></span>
    </PopupWithForm>

    <PopupWithForm 
        name="type_delete-card" 
        title="Are you sure?" 
        buttonText="Yes" 
        isOpen={deletePopupOpen} 
        onClose={handleClosePopups} />

    <PopupWithImage card={selectedCard} isOpen={imagePopupOpen} onClose={handleClosePopups} />
    </CurrentUserContext.Provider> 
    </div>
  );
  }
export default App;
