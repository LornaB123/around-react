import React from 'react';

function Card(props) {
    return(
        <template className = "card__template">
            <figure className="elements__element">
                <img className="elements__element-pic" alt="card image" onClick={props.handleCardClick} style={{backgroundImage: `url(${props.src})`}}/>
                <figcaption className="elements__caption">{props.title}</figcaption>
                <div className = "elements__favorite-container">
                    <button className="elements__favorite" type="button" aria-label="Like"></button>
                    <p className="elements__likes">{props.likes.length}</p>
                </div>
                <button className="elements__trash" type="button" onClick ={props.handleDeleteCardClick} aria-label="Delete"></button>
            </figure>
        </template>
    );
}

export default Card;


