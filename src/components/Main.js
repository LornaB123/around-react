import React, {useState, useEffect, useContext} from 'react';
//import jacquesCousteau from '../images/cousteau.png';
import api from '../utils/api.js';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Main(props) {
    const {
        cards,
        onEditAvatar,
        onEditProfile,
        onAddPlace,
        onCardDelete,
        onCardClick,
        onCardLike,
        onUpdateCardLike,
        onUpdateCardDelete} = props;
    const currentUser = useContext(CurrentUserContext);

    //set states for profile content
   //const [userAvatar, setUserAvatar] = useState('');
   //const [userName, setUserName] = useState('');
   //const [userDescription, setUserDescription] = useState('');
  // const [isLoaded, setIsLoaded] = useState(false);

   //set states for cards
//    const [cards, setCards] = useState([]); 

//    function handleCardLike(card) {
//    //check one more time if this card was already liked
//    const isLiked = card.likes.some((i) => i._id === currentUser._id);
//    let likeStatus
//    if(isLiked === false){
//        likeStatus = api.addLike(card._id)
//    }
//    else{
//        likeStatus = api.removeLike(card._id)
//    }
//    likeStatus
//    .then((newCard) => {
//        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
//        //update the state
//        setCards(newCards);
//    })
//    .catch((err) => console.log(err));
// }

// function handleCardDelete(card){
//     api.removeCard(card._id)
//     .then(() => {
//         const cardList = cards.filter((c) => (c._id !== card._id))
//         setCards(cardList);
//     })
//     .catch((err) => console.log(err));
// }


//    //call server for profile content
//    useEffect(() => {
//        api.getInitialCards()
//        .then((res) => {
//            setCards(res)
//        })
//        .catch(err => console.log(err));
//    }, []);

   //JSX of main section
    return(
            <main className="content">
                <section className="profile">
                        <div className="profile__avatar">
                            <img className="profile__image" src={currentUser.avatar} alt={currentUser.avatar}/>
                            <button onClick={onEditAvatar} className="profile__image-edit" type="button" aria-label="Edit Avatar"></button>
                        </div>
                    <div className="profile__info">
                        <h1 className="profile__info-title">{currentUser.name}</h1>
                        <button className="profile__edit-button" onClick={onEditProfile} aria-label="Edit Profile"></button>
                        <p className="profile__info-subtitle">{currentUser.about}</p>   
                    </div>
                    <button className="profile__add-button" onClick={onAddPlace} aria-label="Add"></button>
                </section>
                <section className="elements">
                    <>
                        {props.cards.map((card) => (
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
