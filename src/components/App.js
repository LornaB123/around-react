import React, {useEffect, useState} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
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
    const [currentAvatar, setCurrentAvatar] = useState('');
    //set card states
    const [cards, setCards] = useState([]); 

    function handleCardLike(card) {
    //check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    let likeStatus
    if(isLiked === false){
        likeStatus = api.addLike(card._id)
    }
    else{
        likeStatus = api.removeLike(card._id)
    }
    likeStatus
    .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        //update the state
        setCards(newCards);
    })
    .catch((err) => console.log(err));
 }
 
 function handleCardDelete(card){
     api.removeCard(card._id)
     .then(() => {
         const cardList = cards.filter((c) => (c._id !== card._id))
         setCards(cardList);
     })
     .catch((err) => console.log(err));
 }
 
 
    //call server for profile content
    useEffect(() => {
        api.getInitialCards()
        .then((res) => {
            setCards(res)
        })
        .catch(err => console.log(err));
    }, []);
 

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
            setCurrentUser(res);
        })
        .catch((err) => console.log(err))
        .finally(() => closeAllPopups());
    }

    function handleUpdateAvatar(avatar) {
        api.setUserAvatar(avatar)
        .then((res) => {
            setCurrentAvatar(res);
        })
        .catch((err)=> console.log(err))
        .finally(() => closeAllPopups());
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
     cards = {cards}
     onEditAvatar = {handleEditAvatarClick}
     onEditProfile = {handleEditProfileClick}
     onAddPlace = {handleAddCardClick}
     onCardDelete = {handleDeleteCardClick}
     onCardClick = {handleCardClick}
     onCardLike = {handleLikeClick}
     onUpdateCardLike = {handleCardLike}
     onUpdateCardDelete = {handleCardDelete}
    />

    <Footer />

    <EditAvatarPopup 
        isOpen={editAvatarOpen} 
        onClose={handleClosePopups} 
        onUpdateAvatar={handleUpdateAvatar} />

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
