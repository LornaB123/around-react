import React from 'react';

function Card(props) {
   const {card, onCardDelete, onCardClick} = props;
    return(
        <figure className="elements__element">
                <img className="elements__element-pic" alt="card image" onClick ={() => onCardClick(card)} src={card && card.link}/>
                <figcaption className="elements__caption">{card.name}</figcaption>
                <div className = "elements__favorite-container">
                    <button className="elements__favorite" type="button" aria-label="Like"></button>
                    <p className="elements__likes">{card.likes.length}</p>
                </div>
                <button className="elements__trash" type="button" onClick ={() => onCardDelete(card)} aria-label="Delete"></button>
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