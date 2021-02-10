import React, {useContext} from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Card(props) {
   const {card, onCardDelete, onCardClick, onCardLike, onUpdateCardLike, onUpdateCardDelete} = props;
   const currentUser = useContext(CurrentUserContext);

   // Checking if you are the owner of the current card
    const isOwn = card.owner._id === currentUser._id;
   // Creating a variable which you'll then set in `className` for the delete button
    const cardDeleteButtonClassName = (
    `elements__trash ${isOwn ? 'elements__trash_visible' : 'elements__trash'}`
     ); 

  // Check if the card was liked by the current user
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Create a variable which you then set in `className` for the like button
    const cardLikeButtonClassName = `elements__favorite ${isLiked ? 'elements__favorite_selected' : 'elements__favorite'}`; 

    return(
        <figure className="elements__element">
                <img className="elements__element-pic" alt="card image" onClick ={() => props.onCardClick(card)} src={card && card.link}/>
                <figcaption className="elements__caption">{card.name}</figcaption>
                <div className = "elements__favorite-container">
                    <button className={cardLikeButtonClassName} onClick= {() => props.onCardLike(card)} type="button" aria-label="Like"></button>
                    <p className="elements__likes">{card.likes.length}</p>
                </div>
                <button className={cardDeleteButtonClassName} type="button" onClick ={() => props.onCardDelete(card)} aria-label="Delete"></button>
        </figure>
    );
}

export default Card;

// {cards.map((card) => 
//     <Card
//     key={card._id}
//     src={card.link}
//     title={card.name}
//     likes={card.likes.length}
//     owner={card.owner}
//     onCardDelete = {(card) => props.handleCardDelete(card.link, card.name)}
//     onCardClick = {(card) => props.handleCardClick(card)}
//     />
//     )}