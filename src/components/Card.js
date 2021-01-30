import React from 'react';

function Card(props) {
    return(
        <figure className="elements__element">
                <img className="elements__element-pic" alt="card image" onClick={props.handleCardClick} src={props.src}/>
                <figcaption className="elements__caption">{props.title}</figcaption>
                <div className = "elements__favorite-container">
                    <button className="elements__favorite" type="button" aria-label="Like"></button>
                    <p className="elements__likes">{props.likes.length}</p>
                </div>
                <button className="elements__trash" type="button" onClick ={props.handleDeleteCardClick} aria-label="Delete"></button>
        </figure>
    );
}

export default Card;


