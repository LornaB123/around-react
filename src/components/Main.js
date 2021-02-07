import React, {useState, useEffect, useContext} from 'react';
//import jacquesCousteau from '../images/cousteau.png';
import api from '../utils/api.js';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Main(props) {
    const {
    onCardClick,
    onCardDelete,
    onCardLike} = props;
    const currentUser = useContext(CurrentUserContext);

    //set states for profile content
   //const [userAvatar, setUserAvatar] = useState('');
   //const [userName, setUserName] = useState('');
   //const [userDescription, setUserDescription] = useState('');
   const [isLoaded, setIsLoaded] = useState(false);

   //set states for cards
   const [cards, setCards] = useState([]);

//    updateLikes(likes) { 
//     this._likes = likes; 
//     this.showLikes(); 
//} 
   function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      // Create a new array based on the existing one and putting a new card into it
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Update the state
      setCards(newCards);
    });
} 
   //call server for profile content
   useEffect(() => {
    //    api.getUserInfo()
    //    .then((res) => {
    //        setUserAvatar(res.avatar);
    //        setUserName(res.name);
    //        setUserDescription(res.about);
    //    })
    //    .catch(err => console.log(err));
       //call server to get initial cards
       api.getInitialCards()
       .then((res) => {
           console.log(res)
           setCards(res)
       })
       .catch(err => console.log(err));
   }, []);


   //JSX of main section
    return(
            <main className="content">
                <section className="profile">
                        <div className="profile__avatar">
                            <img className="profile__image" src={currentUser.avatar} alt={currentUser.avatar}/>
                            <button onClick={props.onEditAvatar} className="profile__image-edit" type="button" aria-label="Edit Avatar"></button>
                        </div>
                    <div className="profile__info">
                        <h1 className="profile__info-title">{currentUser.name}</h1>
                        <button className="profile__edit-button" onClick={props.onEditProfile} aria-label="Edit Profile"></button>
                        <p className="profile__info-subtitle">{currentUser.about}</p>   
                    </div>
                    <button className="profile__add-button" onClick={props.onAddPlace} aria-label="Add"></button>
                </section>
                <section className="elements">
                    <>
                        {cards.map((card) => (
                        <Card
                        key={card._id}
                        card = {card}
                        onCardDelete = {onCardDelete}
                        onCardClick = {onCardClick}
                        onCardLike = {onCardLike}
                        />
                        )
                        )}
                    </>
                </section>
            </main>
    );
}

export default Main;
