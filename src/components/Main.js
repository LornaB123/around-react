import React, {useState, useEffect} from 'react';
import jacquesCousteau from '../images/cousteau.png';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
    //set states for profile content
   const [userAvatar, setUserAvatar] = useState('');
   const [userName, setUserName] = useState('');
   const [userDescription, setUserDescription] = useState('');

   //set states for cards
   const [cards, setCards] = useState([]);
   
   //call server for profile content
   useEffect(() => {
       api.getUserInfo()
       .then((res) => {
           setUserAvatar(res.avatar);
           setUserName(res.name);
           setUserDescription(res.about);
       })
       .catch(err => console.log(err));
       //call server to get initial cards
       api.getInitialCards()
       .then((res) => {
           setCards(res)
       })
       .catch(err => console.log(err));
   }, []);
   //JSX of main section
    return(
            <main className="content">
                <section className="profile">
                        <div className="profile__avatar">
                            <img className="profile__image" src={jacquesCousteau} alt={userAvatar}/>
                            <button onClick={props.handleEditAvatarClick} className="profile__image-edit" type="button" aria-label="Edit Avatar"></button>
                        </div>
                    <div className="profile__info">
                        <h1 className="profile__info-title">{userName}</h1>
                        <button className="profile__edit-button" onClick={props.handleEditProfileClick} aria-label="Edit Profile"></button>
                        <p className="profile__info-subtitle">{userDescription}</p>   
                    </div>
                    <button className="profile__add-button" onClick={props.handleAddCardClick} aria-label="Add"></button>
                </section>
                <section className="elements">
                    <ul className="elements__element">
                        {cards.map((card) => 
                        <Card
                        key={card._id}
                        src={card.link}
                        title={card.name}
                        likes={card.likes.length}
                        owner={card.owner}
                        handleDeleteCardClick = {(card) => props.handleDeleteCardClick(card.link, card.name)}
                        handleCardClick = {()=> props.handleCardClick(card)}
                        />
                        )}
                    </ul>
                </section>
            </main>
    );
}

export default Main;
